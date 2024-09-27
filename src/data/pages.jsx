const pages = [
    {
        id: '1',
        heading: 'About',
        content: `<section>
        <p>Welcome to <strong>Nepali Interest Calculator</strong>, your go-to platform for simplifying the complexities of traditional Nepali interest rates. In a country where local lending practices often involve rates like "<strong>1 rupee</strong>," "<strong>1.5 rupee</strong>," or "<strong>2 rupee</strong>" interest per month, many find it challenging to understand and convert these into modern financial terms. Our mission is to bridge this gap, offering a straightforward and reliable tool that makes these calculations accessible to everyone.</p>

        <h2 class="page-h2">Our Purposes</h2>
        <p>The Nepali Interest Calculator was born out of a need to demystify the traditional lending systems prevalent across Nepal. We understand that many people, especially those accustomed to bank interest rates expressed in percentages per annum, often struggle to grasp the nuances of local interest calculations. Whether you are a borrower, lender, or someone simply looking to understand these rates better, our calculator is designed to make your life easier.</p>

        <h2 class="page-h2">What We Offer</h2>
        <p>Our platform provides an easy-to-use calculator that accurately computes both simple and compound interest based on traditional Nepali interest rates. You can input your principal amount, time period (in years, months, and days), select your interest rate, and even calculate compound interest with annual compounding. The results are precise, down to two decimal places, ensuring that you have the most accurate information at your fingertips.</p>

        <h2 class="page-h2">Why Choose Us?</h2>
        <ul>
            <li class="my-3"><strong>Simplicity:</strong> We’ve designed our calculator to be user-friendly, requiring just a few inputs to deliver clear and understandable results.</li>
            <li class="my-3"><strong>Accuracy:</strong> Our calculator is precise, offering results accurate to two decimal places, so you can trust the information it provides.</li>
            <li class="my-3"><strong>Versatility:</strong> Whether you’re dealing with simple interest or more complex compound interest calculations, our tool can handle it all.</li>
            <li class="my-3"><strong>Understanding Local Needs:</strong> We recognize the unique financial landscape in Nepal and have tailored our platform to meet the specific needs of our users.</li>
        </ul>

        <h2 class="page-h2">Our Vision</h2>
        <p>We aim to empower individuals across Nepal by providing them with the tools and knowledge needed to make informed financial decisions. By simplifying traditional interest rate calculations, we hope to contribute to a more financially literate society where everyone has the power to understand and manage their finances effectively.</p>

        <p class="my-4">Thank you for choosing Nepali Interest Calculator. We are here to help you navigate the complexities of traditional interest rates with ease and confidence.</p>
    </section>`
    },
    {
        id: '2',
        heading: 'Terms of use',
        content: `<section class="p-5">
        <p>Welcome to Nepali Interest Calculator. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.</p>

        <h2 class="page-h2">1. Acceptance of Terms</h2>
        <p>By using the Nepali Interest Calculator, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our Privacy Policy. If you do not agree to these terms, please refrain from using our website.</p>

        <h2 class="page-h2">2. Use of the Service</h2>
        <p>The Nepali Interest Calculator is provided for informational purposes only. The calculations provided by our platform are based on the inputs you provide and are intended to offer estimates of interest amounts. We do not guarantee the accuracy or completeness of these calculations, and they should not be relied upon for financial decision-making.</p>

        <h2 class="page-h2">3. User Responsibilities</h2>
        <p>As a user, you are responsible for ensuring the accuracy of the data you input into the calculator. You agree not to use our service for any unlawful or prohibited purpose, and you will not interfere with the operation of our website or the services it provides.</p>

        <h2 class="page-h2">4. Intellectual Property</h2>
        <p>All content on the Nepali Interest Calculator website, including but not limited to text, graphics, logos, and software, is the intellectual property of Nepali Interest Calculator and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.</p>

        <h2 class="page-h2">5. Limitation of Liability</h2>
        <p>Nepali Interest Calculator and its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our services. This includes, but is not limited to, any errors or omissions in the calculations, or any actions taken based on the information provided by the calculator.</p>

        <h2 class="page-h2">6. Modification of Terms</h2>
        <p>We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the Nepali Interest Calculator after such changes have been made constitutes your acceptance of the new terms.</p>

        <h2 class="page-h2">7. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of Nepal. Any disputes arising from your use of the Nepali Interest Calculator shall be subject to the exclusive jurisdiction of the courts of Nepal.</p>

        <h2 class="page-h2">8. Contact Information</h2>
        <p>If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto:support@nepaliinterestcalculator.com">support@nepaliinterestcalculator.com</a>.</p>

         <p class="my-4">Thank you for using Nepali Interest Calculator. We hope our service helps you navigate the complexities of traditional Nepali interest rates with ease.</p>
    </section>`
    },
    {
        id: "3",
        heading: "Contact us",
        content: `
        <section class="p-5">
        <p>We’re here to help! Whether you have questions, feedback, or need support with the Nepali Interest Calculator, feel free to reach out to us using any of the methods below. Our team is dedicated to providing prompt and helpful assistance.</p>

        <h2 class="page-h2">Email Us</h2>
        <p>If you have any inquiries, suggestions, or require technical support, you can email us at:</p>
        <p><a href="mailto:dev@sunil-sharma.com.np">dev@sunil-sharma.com.np</a></p>

        <h2 class="page-h2">Visit My Portfolio</h2>
        <p>You can learn more about my work by visiting my portfolio:</p>
        <p><a href="https://sunil-sharma.com.np" target="_blank">sunil-sharma.com.np</a></p>

        <h2 class="page-h2">Feedback Form</h2>
        <p>Alternatively, you can use our online feedback form to send us your comments or questions:</p>
        <form class="my-6" action="/submit-feedback" method="post">
            <label class="font-bold mr-2" for="name">Your Name </label>
            <input class="h-6 p-2 rounded-md font-semibold text-black" type="text" id="name" name="name" required><br><br>

            <label  class="font-bold mr-2" for="email">Your Email </label>
            <input class="h-6 p-2 rounded-md font-semibold text-black" type="email" id="email" name="email" required><br><br>

            <label  class="font-bold mr-2" for="message">Your Message </label><br>
            <textarea class="p-2 my-2 rounded-md font-semibold text-black w-[26rem]  md:w-[22rem] max-sm:w-[15rem]" id="message" name="message" rows="5" required></textarea><br><br>

            <button type="submit">Send Message</button>
        </form>

        <p>We appreciate your interest in the Nepali Interest Calculator and look forward to assisting you!</p>
    </section>
        `
    }
]

export default pages;