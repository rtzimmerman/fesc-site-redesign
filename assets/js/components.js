Vue.component('footer-component', {
    template: `
    <div>
    <section class="upper-footer">
        <address>
            <p class="phone">(352) 294-2027</p>
            <a href="https://www.google.com/maps/place/Grinter+Hall,+Gainesville,+FL+32601/@29.6492781,-82.3442482,17z/data=!3m1!4b1!4m5!3m4!1s0x88e8a3832ef3fc15:0x6e70c9103d059160!8m2!3d29.6492781!4d-82.3420595">
                <p>272 Grinter Hall</p>
                <p>P.O. Box 115500</p>
                <p>Gainesville, FL 32611-5500</p>
            </a>
        </address>
        <section class="newsletter">
            <form id="newletter-signup" method="POST" action="#">
                <h4>Sign up for our newsletter for the latest news and events! <i class="fas fa-envelope"></i></h4>
                <label for="newsletter-email">Email: </label>
                <input id="newsletter-email" type="email" name="email"/>
                <input id="newletter-signup-submit" type="submit" name="Sign Up">
            </form>
            <p id="newsletter-signup-validation-results"></p>
        </section>
    </section>
<section class="lower-footer">
    <section class="social-media">
        <a href="https://www.facebook.com/pages/Florida-Energy-Systems-Consortium/1491171257838230" target="_blank"><i class="fab fa-facebook-square"></i></a>
        <a href="https://twitter.com/FESC_UF" target="_blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.linkedin.com/groups/5102147/profile" target="_blank"><i class="fab fa-linkedin"></i></a>
    </section>
    <p class="copyright-info">Copyright © 2008-2018 Florida Energy Systems Consortium.</p>
</section>
</div>`
})

// Vue.component('social-media', {
//     template: `
//         <section class="social-media">
//             <a href="https://www.facebook.com/pages/Florida-Energy-Systems-Consortium/1491171257838230" target="_blank"><i class="fab fa-facebook-square"></i></a>
//             <a href="https://twitter.com/FESC_UF" target="_blank"><i class="fab fa-twitter-square"></i></a>
//             <a href="https://www.linkedin.com/groups/5102147/profile" target="_blank"><i class="fab fa-linkedin"></i></a>
//         </section>`
// });

new Vue({
    el: 'footer',
  })