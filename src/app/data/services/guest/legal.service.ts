import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LegalService {
    contents = [
        {
            title: 'Terms of Service',
            slug: 'terms-of-service',
            updated_at: '2022-12-11',
            intro: `<p>Through its electronic platform ("Pavypay"), QUIN-TECH SOLUTIONS LTD (PAVYPAY), a company incorporated in Nigeria (the "Company"), offers services for the facilitation of cross-border B2B activities, including escrow service, business verification, and related services. The "Escrow Terms and Conditions" are outlined in this document, which also acts as an agreement governing your usage of the escrow service offered by the Company through Pavypay.</p>`,
            contents: [
                {
                    subheading: 'General',
                    slug: 'general',
                    content: `<ol>
                    <li>Pavypay, is owned and run by the company, Quin-Tech Solutions Limited with <a href="https://www.pavypay.com" target="_blank">https://www.pavypay.com</a> as the company’s official website.</li>
                    <li>Subject to the Escrow Terms and Conditions, you hereby expressly employ, authorize, and direct the Company to operate as your escrow agent with respect to each Escrow Agreement.</li>
                    <li>You expressly designate the Company to perform currency conversion and related services as well as collect, retain, disburse, or transmit the Escrow Amount domestically or internationally.</li>
                    <li>To see the specifics and current status of any Escrow Agreement to which you are a party, log on to Pavypay.</li>
                    <li>Any reference to time or a calendar day in the Escrow Terms and Conditions refers, respectively, to Nigeria Time and a Nigerian calendar day.</li>
                    <li>English must always be used in all communications.</li>
                    <li>You acknowledge the Escrow Terms and Conditions and express your desire and consent to be bound by them by utilizing the Escrow Service.</li>
                    </ol>`,
                },
                {
                    subheading: 'What we collect',
                    slug: 'what-we-collect',
                    content: `
                    <div>We may collect the following information but not limited to:</div>
                    <ol>
                    <li>First and last name</li>
                    <li>Email address and phone number</li>
                    <li>Date of birth and gender</li>
                    <li>BVN ( As directed by CBN for KYC)</li>
                    </ol>`,
                },
                {
                    subheading: 'Security',
                    slug: 'security',
                    content: `
                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures such as to safeguard and secure the information we collect online.</p>`,
                },
                {
                    subheading: 'Interpretations and Definitions',
                    slug: 'interpretations-and-definitions',
                    content: `
                    <p>Unless the situation calls for something different, the following definitions shall be used:</p>
                    <p>The definition of "Account" in the General Terms and Conditions shall apply.</p>
                    <p>Any day that falls during the hours of 9am and 5pm (Nigeria Time), except Saturdays, Sundays, and public holidays as described in section 2 of the Holidays Act (Cap. 126), as amended and/or supplemented from time to time, is referred to as a "business day."</p>
                    <p>"Buyer" refers to the person who is purchasing the goods and services under the escrow agreement.</p>`,
                },
                {
                    subheading: 'Chargebacks',
                    slug: 'chargebacks',
                    content: `
                    <p>refers to a payment return request made by the buyer of the goods or services, either directly or via the intermediaries participating in the escrow payment processing. includes any charges made by the parties acting as intermediaries.</p>
                    <p>An obligation resulting from a suit, demand, loss claim, liability claim, damage claim, action, or legal proceeding is referred to as a "claim."</p>`,
                },
                {
                    subheading: 'Escrow Account',
                    slug: 'escrow-account',
                    content: `
                    <p>Refers to any fees owed to Payment Service Providers, Financial Partners, and the Company as a result of their provision of the Escrow Service to you.</p>`,
                },
                {
                    subheading: 'Payment Release Conditions',
                    slug: 'payment-release-conditions',
                    content: `
                    <p>Refers to the requirements that must be met before the escrow amount is released to the seller.</p>`,
                },
                {
                    subheading: 'Conclusion',
                    slug: 'payment-release-conditions',
                    content: `
                    <ol>
                    <li>The singular includes the plural and vice versa, and references to one gender include all genders. The phrases "including," "including," "in particular," and other phrases with a similar effect are not to be interpreted as limiting the overall meaning of the phrases that come before them.</li>
                    <li>Any mention of time or a calendar day in these Escrow Terms and Conditions refers, respectively, to Nigeria Time and a Nigerian calendar day.</li>
                    <li>English must be used in all communications of any form and for any purpose.</li>
                    <li>Pavypay occasionally uses other service providers to provide its services. Pavypay Terms and Conditions by reference incorporate the terms and conditions of the service providers. Direct contact with these service providers is optional. Despite this, you acknowledge that by accepting the Pavypay Terms and Conditions, you also consent to being bound by the terms and conditions of any third-party service providers mentioned within. If you have any inquiries, please contact our support at <a href="mailto:support@Pavypay.com" target="_blank">support@Pavypay.com</a>.</li>
                    <li>You agree that the Company may periodically change, revise, or restate these Escrow Terms and Conditions without further notifying you and/or obtaining your consent, and that any such amendment, revision, or restatement (as applicable) shall be effective as of the date the Company may tell you.</li>
                    </ol>`,
                },
            ],
        },
        {
            title: 'Privacy Policy',
            slug: 'privacy-policy',
            updated_at: '2022-12-11',
            intro: `<p>When you use our services, you’re trusting us with your information. We understand that this is a big responsibility and we work hard to protect your information and put you in control.</p>
            <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it and how you can update, manage, export and delete your information.</p>`,
            contents: [
                {
                    subheading: 'Information Pavypay collects',
                    slug: 'information-pavypay-collects',
                    content: `
                    <p>We collect information to verify and provide better services to all our users – from Fullname, Phone Number, Email Address, Gender, Date Of Birth, Address and BVN (As directed by CBN for KYC ).</p>
                    <p>All this personal information are managed, secured and protected inline with standard security protocol.</p>`,
                },
                {
                    subheading: 'How we use the information',
                    slug: 'how-we-use-the-information',
                    content: `
                    <p>We use information that we collect, such as your email address, to interact with you directly. For example, we may send you a notification if we detect suspicious activity, such as an attempt to sign in to your pavypay account from an unusual location.</p>
                    <p>Or we may let you know about upcoming changes or improvements to our services. And if you contact pavypay, we’ll keep a record of your request in order to help solve any issues you might be facing.</p>`,
                },
                {
                    subheading: 'Keeping your information secured',
                    slug: 'keeping-your-information-secured',
                    content: `
                    <p>Our platform is built with strong security features that continuously protect your information. The insights we gain from maintaining our services help us detect and automatically block security threats from ever reaching you. And if we do detect something risky that we think you should know about, we’ll notify you and help guide you through steps to stay better protected.</p>
                    <p>We work hard to protect you account and personal informations from unauthorized access, alteration, disclosure or destruction of information we hold, including:</p>
                    <ol>
                    <li>We use encryption to keep your data private at all times.</li>
                    <li>We activated a range of security features, like Safe Browsing, Security Check-Up and 2 Step Verification to help you protect your account.</li>
                    <li>We review our information collection, storage and processing practices, including physical security measures, to prevent unauthorized access to our systems.</li>
                    <li>We restrict access to personal information to unauthorized employees.</li>
                    </ol>`,
                },
                {
                    subheading: 'Conclusion',
                    slug: 'conclusion',
                    content: `
                    <p>We change this Privacy Policy from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We always indicate the date when the last changes were published and we offer access to archived versions for your review. If changes are significant, we’ll provide a more prominent notice (including, for certain services, email notification of Privacy Policy changes).</p>`,
                },
            ],
        },
        {
            title: 'Return Policy',
            slug: 'return-policy',
            updated_at: '2022-12-11',
            intro: ``,
            contents: [
            ],
        },
    ];

    getPage(page) {
        return of(this.contents.find((p) => p.slug == page));
    }

    constructor() {}
}
