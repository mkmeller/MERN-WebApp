import { React, useState, useEffect } from 'react';



function ContactPage(){
            return(
            <>
            <h2>Contact</h2>
            <article>
                <h3>Please provide your contact info and answer a few questions.</h3>
                <p><strong>* Fields are required</strong></p>
                <form>
                    <fieldset>
                        <legend>
                            Tell us about yourself...
                        </legend>
                        <p>
                            <label class="required" for="firstLast">Name</label>
                                <input 
                                    type="text" 
                                    name="firstLast" 
                                    id="firstLast" 
                                    class="textbox"
                                    size="30" 
                                    maxlength="100" 
                                    required
                                    placeholder="First and last name" 
                                    autofocus />
                        </p>
                        <p>
                            <label class="required" for="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    class="textbox"
                                    size="30" 
                                    maxlength="100" 
                                    required 
                                    pattern="[^ @]+@[^ @]+.[aA-zZ]+"
                                    placeholder="name@host.com" 
                                />
                        </p>
                        <p>
                            <label for="favpic">Select your favorite gallery photo</label>
                            <select name="favpic" id="favpic">
                                <option value="no">--None--</option>
                                <option value="the Eiffel">Eiffel Tower</option>
                                <option value="the Amsterdam">Amsterdam</option>
                                <option value="the Leo">Leo</option>
                                <option value="the tarts">Tarts</option>
                                <option value="the coffee">Coffee</option>
                                <option value="the Manhattan">Manhattan</option>
                                <option value="the Maui">Maui </option>
                                <option value="the London">London </option>
                                <option value="the Riomaggiore">Riomaggiore</option>
                                <option value="the Vatican City">Vatican City </option>
                            </select>
                        </p>
                        <p>Do you know of a software developer career opportunity?
                            <label for="yes">
                            <input className = "radioOrCheck" type="radio" name="career" id="yes" value="have"/>
                                Yes, I am an employer and hiring
                            </label>
                            <label for="maybe">
                            <input className = "radioOrCheck" type="radio" name="career" id="maybe" value="know of"/>
                                I am not an employer but can give a reference/
                            </label>
                            <label for="no">
                            <input className = "radioOrCheck" checked type="radio" name="career" id="no" value="don't know of"/>
                                Not currently
                            </label>
                        </p>
                        <p>How would you prefer to connect? Put any additional details in the text box below.
                        <label for="emailcontact">
                            <input className = "radioOrCheck" type="checkbox" name="contact" id="emailcontact"  value="Email" />
                            Email</label>
                        <label for="linkedin">
                            <input className = "radioOrCheck" type="checkbox" name="contact" id="linkedin"  value="LinkedIn" />
                            LinkedIn</label>
                        <label for="facebook">
                            <input className = "radioOrCheck" type="checkbox" name="contact" id="facebook"  value="Facebook" />
                            Facebook</label>
                        <label for="instagram">
                            <input className = "radioOrCheck" type="checkbox" name="contact" id="instagram"  value="Instagram" />
                            Instagram</label>
                        <label for="nocontact">
                            <input className = "radioOrCheck" checked type="checkbox" name="contact" id="nocontact"  value="none of the choices" />
                            I prefer not to connect</label>
                        </p>
                        <p>
                            <label class="required" for="comments">Please leave any additional information or questions:</label>
                                <textarea 
                                    name="comments" 
                                    id="comments" 
                                    minlength="4" 
                                    maxlength="250" 
                                    required
                                    rows="2"
                                    cols="40"
                                    placeholder="250 characters max" 
                                ></textarea>
                        </p>
                        <label for="submit"> 
                            <button type="submit" id="submit" name="submit">Submit</button>
                        </label>
                    </fieldset>
                </form>
            </article>
            </>
    )
}

export default ContactPage