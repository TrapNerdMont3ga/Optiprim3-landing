import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Ready to move smarter? <span>Contact us</span> or request a quote to get started.</p>
                <img src="/logo1.svg" alt="Optiprim3 logo"/>
            </div>

            <hr />

            <div className="links">
                <p>Copyright © 2025 Optiprim3. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
