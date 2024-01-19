import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs = [
    {
      id: 1,
      type: 'Product',
      type_slug: 'product',
      created_at: '2022-09-11',
      title: 'What is Escrow?',
      content: `<p>Escrow is the term used when funds or assets are held by a neutral, jointly-appointed third party on behalf of two contracting parties, subject to a transaction being completed between them (typically a contract of sale), until certain predetermined obligations or conditions under the agreement have been met.</p>
                <p>
                Simply put, an escrow account is a bank account with defined conditions for the release of funds.</p>
                <p>An ‘escrow agent’ acts as the neutral third-party intermediary, whose role is to ensure that all parties to a transaction perform as the contract or agreement requires.</p>
                <p>Escrow therefore is a useful tool that provides security and comfort to both contracting parties in a transaction and can be used in relation to virtually any contract involving the transfer of money or property. It is a preferred way to mitigate risks against the non-performance of an obligation by your counterparty.</p>
                <p>
                <h2>How Pavypay can help</h2>
                <p>Legitimate escrow services are supposed to protect users from fraudulent activity. An ‘escrow agent’ such as <strong>Pavypay</strong> acts as the neutral third-party intermediary, whose role is to ensure that all parties to a transaction perform as the contract or agreement requires. If there is a problem with a transaction, the funds/assets can simply be refunded. Hence It is of prime importance that an escrow agent be jointly-appointed by all parties to a transaction and that the escrow agent should be trusted and regulated by necessary and relevant regulatory agencies such as we have in <strong>Pavypay</strong>.</p>
                <p>Pavypay is a product of <strong>QUIN-TECH SOLUTIONS LTD</strong> duly registered with the Corporate Affairs Commission of Nigeria (CAC). As a commitment to providing transparent and excellent escrow solutions, we have also partnered with VFD Bank as our financial partners. Our financial partner (VFD Bank) Limited is licensed by the Central Bank of Nigeria (CBN) and other relevant monetary Authority for such operations.</p>
                <p>Pavypay provide a botherless escrow service for a wide range of transactions, employing a robust compliance review in order to minimise risk to our users. As an escrow solution service provider, Pavypay  will hold funds, in accordance with the terms and conditions under a particular escrow agreement with VFD Bank Limited where we have a pre-established, segregated banking facility. This ensures that there can be no co-mingling of client funds.</p>`,
      banner:
        'https://res.cloudinary.com/bluescrow/image/upload/v1663361220/assets/blog/post-1-large_cacuvd.png',
      thumbnail:
        'https://res.cloudinary.com/bluescrow/image/upload/v1663361219/assets/blog/post-1-small_lpmqsx.png',
    },
    {
      id: 2,
      type: 'Marketing',
      type_slug: 'marketing',
      created_at: '2022-09-11',
      title: 'The Importance of Digitalizing your Business',
      content: `<p>The advent of the “world wide web” opened the internet to all and sundry, connecting the world in a way that made it a lot easier for people across the globe to get and share information, their works and thoughts through social networking. It will be unfair to shy away from the fact that the world wide web also created opportunities for people with questionable character to execute fraudulent acts over the internet, hence Pavypay to mitigate such activities.</p>
                <p>An African proverb have it that “When one closes his/her eyes not to see evil, Good will likewise pass by without the person seeing it. In all ramification the importance of the internet outweighs it demerits.<p>
                <p>The internet shrinks the entire globe into one’s device, (PC and Smartphones), thereby creating an avalanche of wealth and defiling geographical boundaries for business. Mant small businesses across the world who have find their way to the internet have challenge in receiving payment for goods sold and services rendered.</p>
                <p>Every business online stands a better chance of scaling up, getting new customers and sales increase.</p>
                <p>It is worthy to note that fraudulent activities is not only from the side of buyers, it can come from either sides of the coin. Hence the need for Pavypay can never be overemphasized.</p>
                <p>Fascinatingly, digitalized businesses are set on the go, thereby attracting clients/customer across the globe even when the business owner is sleeping.</p>`,
      banner:
        'https://res.cloudinary.com/bluescrow/image/upload/v1663361220/assets/blog/Post-2-large_xht0lr.png',
      thumbnail:
        'https://res.cloudinary.com/bluescrow/image/upload/v1663361219/assets/blog/post-2-small_rrghxf.png',
    },
    {
      id: 3,
      type: 'Company News',
      type_slug: 'company-news',
      created_at: '2022-09-11',
      title: 'We are Going Live!!!',
      content: `<p>After several months of putting in the hard works, testing and general overhauling to ensure users have the best experience using our platform we are excited to announce that its time! Yes I mean it is time to go live and Monday 3rd October, 2022 is the date.</p>
                <p>Start registering!</p>
                <p>Start sharing…!!</p>`,
      banner:
        'https://res.cloudinary.com/bluescrow/image/upload/v1663361219/assets/blog/Post-3-large_on5gvy.png',
      thumbnail:
        'https://res.cloudinary.com/bluescrow/image/upload/v1663361219/assets/blog/post-3-small_mdopwp.png',
    },
  ];

  constructor() {}

  getBlogs(cat) {
    if (cat == 'all') {
      return of({ data: this.blogs });
    }
    return of({ data: this.blogs.filter((b) => b.type_slug == cat) });
  }

  blogSingle(id) {
    return of({
      data: {
        data: this.blogs.find((b) => b.id == id),
        related: this.blogs.filter((b) => b.id != id),
      },
    });
  }
}
