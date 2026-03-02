// Vercel Serverless Function — Lead Capture via Resend
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
    const NOTIFICATION_EMAIL = '3p.sachin.uppal@lognormal.io';

    const {
        name,
        email,
        company,
        phone,
        industry,
        role,
        seniority,
        triggerAction,
        caseStudyName,
        triggerPage,
        timestamp,
    } = req.body;

    // Validate required fields
    if (!name || !email || !company || !industry || !role || !seniority) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!RESEND_API_KEY) {
        console.error('[FalconDive] RESEND_API_KEY not configured');
        return res.status(500).json({ error: 'Email service not configured. Set RESEND_API_KEY in Vercel environment variables.' });
    }

    const subject = `[FalconDive Lead] ${company} — ${name} (${industry})${caseStudyName && caseStudyName !== 'N/A' ? ` [${caseStudyName}]` : ''}`;

    const htmlBody = `
<div style="font-family: 'Courier New', monospace; background: #0a0e17; color: #e0e0e0; padding: 32px; border-radius: 12px; max-width: 600px;">
    <div style="border-bottom: 2px solid #00e5ff; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="color: #00e5ff; font-size: 18px; margin: 0;">NEW LEAD FROM FALCONDIVE.IO</h1>
    </div>

    <div style="margin-bottom: 24px;">
        <h2 style="color: #00e5ff; font-size: 14px; margin: 0 0 12px 0;">CONTACT INFORMATION</h2>
        <table style="font-size: 14px; line-height: 1.8;">
            <tr><td style="color: #888; padding-right: 16px;">Name:</td><td style="color: #fff;">${name}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Email:</td><td style="color: #fff;"><a href="mailto:${email}" style="color: #00e5ff;">${email}</a></td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Company:</td><td style="color: #fff;">${company}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Phone:</td><td style="color: #fff;">${phone || 'Not provided'}</td></tr>
        </table>
    </div>

    <div style="margin-bottom: 24px;">
        <h2 style="color: #00e5ff; font-size: 14px; margin: 0 0 12px 0;">PROFILE</h2>
        <table style="font-size: 14px; line-height: 1.8;">
            <tr><td style="color: #888; padding-right: 16px;">Industry:</td><td style="color: #fff;">${industry}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Role:</td><td style="color: #fff;">${role}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Seniority:</td><td style="color: #fff;">${seniority}</td></tr>
        </table>
    </div>

    <div style="margin-bottom: 24px;">
        <h2 style="color: #00e5ff; font-size: 14px; margin: 0 0 12px 0;">CONTEXT</h2>
        <table style="font-size: 14px; line-height: 1.8;">
            <tr><td style="color: #888; padding-right: 16px;">Action:</td><td style="color: #fff;">${triggerAction || 'General Inquiry'}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Case Study:</td><td style="color: #fff;">${caseStudyName || 'N/A'}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Page:</td><td style="color: #fff;">${triggerPage || 'N/A'}</td></tr>
            <tr><td style="color: #888; padding-right: 16px;">Timestamp:</td><td style="color: #fff;">${timestamp || new Date().toISOString()}</td></tr>
        </table>
    </div>

    <div style="border-top: 1px solid #333; padding-top: 12px; font-size: 11px; color: #666;">
        Source: falcondive.io | Powered by Resend
    </div>
</div>`;

    // Determine the "from" address:
    // If using a verified domain, use leads@falcondive.io
    // Otherwise, fall back to Resend's default onboarding address
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'FalconDive Leads <leads@updates.revenueable.ai>';

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromAddress,
                to: [NOTIFICATION_EMAIL],
                reply_to: email,
                subject,
                html: htmlBody,
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('[FalconDive] Resend API error:', errorData);
            return res.status(500).json({ error: 'Failed to send email', details: errorData });
        }

        const result = await response.json();
        console.log('[FalconDive] Lead email sent successfully:', result.id);
        return res.status(200).json({ success: true, id: result.id });
    } catch (err) {
        console.error('[FalconDive] Email send error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
