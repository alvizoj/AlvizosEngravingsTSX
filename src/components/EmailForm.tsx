import React from "react";
import "../CSS/EmailForm.css";

export default function EmailForm() {
    return (
        <div className="EmailForm">
            <form
                className="form"
                action="https://mailthis.to/jalvizo"
                method="POST"
                encType="multipart/form-data"
            >
                <input type="text" name="name" placeholder="Your name" />
                <input type="email" name="_replyto" placeholder="Your email" />
                <input type="text" name="message" placeholder="Message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}
