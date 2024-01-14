function TopicsPage() {
    return(
        <>
        <h2>Web Development Concepts</h2>
        <nav class="local">
            <a href="#servers">Web Servers</a>
            <a href="#frontend">Frontend</a>
            <a href="#images">Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#css">CSS</a>
            <a href="#forms">Forms</a>
            <a href="#express">Express</a>
            <a href="#javascript">JavaScript</a>
        </nav>
        <article id="servers">
            <h3>Web Servers</h3>
            <p>
                {/* <!-- Explain what index means as it relates to websites and servers --> */}
                The <strong>index</strong> resource is generally the default <strong>resource</strong> that is displayed to a user when they navigate to a website without explicitly specifying a path. While this is the case for Apache web servers, some other servers, such as on the .NET platform, may look for a resource named default instead. Structurally, for static content, the index resource usually takes the form of an <strong>HTML</strong> file located at the root directory of a web application. In the case of dynamic content, the index resource might refer to a program with a .js or .php extension that generates some content on execution and then serves it to the client. In both cases, the index resource generally serves as the homepage for a web application.
            </p>
            <p>
                {/* <!-- Explain what can be seen in the browser's Web Dev/Inspector Network tab output screen. What is different about the file's details when viewed from the web server versus the local computer? --> */}
                The web browser's inspector network tab allows us to see the details of the <strong>HTTP</strong> request sent and response received when the browser is fetching a resource. For instance, when viewing the file locally, we can see the browser is using the file scheme to open the local resource and communicating over the default HTTPS port of 443. On the other hand, when viewing the file from the web server, we see the browser is using the HTTPS scheme to fetch the HTML file and the IP address of the server is displayed. Also, from the web server details, we can see the index file is being displayed even if we don't specify any particular resource in the URL. Finally, the web server details contain many more key-value pairs under the request and response headers conveying information such as the fact that we are communicating with an Apache server.
            </p>
            <p>
                {/* <!-- Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. --> */}
                The <strong>favicon</strong> file is an image that is displayed by the web browser next to the page title in a tab. When our index resource is being requested, the web browser is also requesting the favicon over HTTPS. Since the favicon file is physically present on the root directory of the server our index.html file is hosted on, the server is able to provide the favicon to the browser and responds with a status code of 200 to indicate the response was fulfilled. On the other hand, our index.html file references two files, main.css and main.js, neither of which are physically present on the web server. When the web browser requests these resources, the server is unable to locate them and responds with a status code of 404 to indicate the resources were not found.
            </p>
            <p>
                {/* <!-- Explain the parts of the URL to your web file. What is the scheme, the subdomain, the host domain, and the resources? --> */}
                The <strong>URL</strong> to my web file is https://web.engr.oregonstate.edu/~mellerm/a1-mellerm/. The first part of the URL, HTTPS, indicates the scheme. Next, the subdomain, engr, is a subsection of the main host domain, oregonstate.edu. In this particular case, engr.oregonstate.edu also has a subdomain of web. After the domain, we have /~mellerm/ to specify a path to a resource. Since this URL does not specify a particular resource, the server will automatically send the homepage of the web application, index.html, to the web browser.
            </p>
        </article>
        <article id="frontend">
            <h3>Frontend Design</h3>
            <p>
                {/* <!-- The concept of frontend design, in a <p> paragraph. --> */}
                Frontend design is a user-centric approach which seeks to create a web experience that best serves the user. This approach focuses on the visual design, user interface, and interactive experience of the user. Good frontend design includes using aesthetically pleasing and internally consistent colors, fonts, layouts, and illustrations. Additionally, web applications should be easy for users to navigate, even at first glance, so that they can efficiently meet their goals. A highly <strong>usable</strong> website will strive to conform to the five “E” s:
            </p>
            <dl>
                {/* <!-- The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions.  --> */}
                <dt><strong>Effective</strong> </dt>
                <dd>Users should be able to accurately meet their end goals.</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>Users should be able to get their results quickly, with the least number of steps possible.</dd>
                <dt><strong>Easy to navigate</strong></dt>
                <dd>Users should immediately understand how to locate their goal through navigation or search.</dd>
                <dt><strong>Error-free</strong></dt>
                <dd>Users should not encounter roadblocks to their goals.</dd>
                <dt><strong>Enjoyable</strong></dt>
                <dd>Users should have a positive overall experience in using the website.</dd>
            </dl>
            <p>
                {/* <!-- The purpose of each of the page layout tags, in a <p> paragraph. --> */}
                Page layout <strong>elements</strong> break up the flow of content to create easy to read sections while also informing non-human consumers of the website how content is distributed on the page. The &lt;header&gt; element is used to contain information that persists across pages on the same site, such as the banner or masthead and name, publisher, and marketing slogan of the site. The &lt;nav&gt; element allows users to quickly move to different parts of the page, to other pages of the same site, or to external sites. The &lt;main&gt; element is the primary block which contains the page contents, such as text or media. The &lt;section&gt; element is used to thematically group related content, for example, the sports section of a newspaper. The &lt;article&gt; element contains information on an individual topic within the section. The &lt;aside&gt; element includes content that relates to but is shown to the left or right of the main content. The &lt;figure&gt; element displays an image or video to the user along with a &lt;figcaption&gt; element to caption the media. The &lt;blockquote&gt; element is used to display an extended quotation that may be too long to integrate into a paragraph as well as its citation using the &lt;cite&gt; element. The &lt;footer&gt; element sits below the page content and usually contains copyright, publication year, and author name information. Finally, the &lt;div&gt; element is used as a generic way to divide content if no suitable element exists and also as a placeholder for dynamic content. In addition to these layout elements, the <strong>anchor</strong> is another critical HTML element as it allows creating links to multiple types of content:
            </p>
            {/* <!-- How anchors link to external content, internal content, and from page-to-page, in an <ol> ordered list.  --> */}
            <ol>
                <li>The anchor element can be used to link to external content by specifying a URL as a value for the href attribute.</li>
                <li>The anchor element can also link to other items on the same page by referencing the value of the ID attribute of a tag. Again the href attribute is used, this time with a value of '#' followed by the ID.</li>
                <li>The anchor element, in conjunction with the nav element is used to link to other pages on the website. The nav element creates an interactive box populated with anchors which link to other pages by specifying a relative path as a value of the href attribute rather than a URL.</li>
            </ol>
        </article>
        <article id="images">
            <h3>Optimizing Images</h3>
            <p>
                {/* <!-- What are the 6 major specifications of images for the web?  And why? --> */}
                {/* <!-- Which file formats are most appropriate for photos and for line art? And why? --> */}
                The 6 major image specifications for the web are: descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and color mode. <strong>Descriptive file names</strong> should be concise yet informative so that search engines can accurately serve users the most relevant images. <strong>Small file sizes</strong> improve the user experience by speeding up load times. File size can be controlled by the degree of image compression. Lossless compression can be used to maintain quality while Lossy compression can be used to optimize for file size. Similarly, using <strong>exact dimension</strong> through image cropping and resizing ensures that the client does not need to load a file that is unnecessarily big for the space it is being displayed in. Using the <strong> correct file format</strong> is also important, depending on the application an image is being used in. For example, GIF and SVG files can provide animation, PNG files provide true transparency, and SVG files remain sharp regardless of scaling. These formats are preferred for line art since SVG files maintain sharpness, PNG files can be placed over any color without distortion, and GIFs have 8 bit transparency. On the other hand, JPG and WebP formats are generally used for photographic images, as they can be greatly compressed while maintaining  their rectangularity. Web applications can also serve <strong>reduced resolution</strong> versions of an image to clients viewing the web application from a low resolution screen. This saves on bandwidth while allowing high resolution clients to consume higher definition versions of the image. Finally, <strong>color modes</strong>, in particular RGB, are used to accurately reproduce images on a variety of screens. Some formats like GIF instead use indexed color, which allow for more compression of the color data in exchange for less accurate reproduction.
            </p>
        </article>
        <article id="favicons">
            <h3>Favicons</h3>
            <p>
                {/* <!-- How do browsers and devices use favicons?  --> */}
                Favicons, or favorite icons, are small images typically in a GIF, PNG, ICO, or SVG format. Favicons can be a symbol, word, company logo, or even an emoji. They are used to represent and quickly identify a site or entity in a browser tab, on a mobile device, in a search results page, in a bookmark list, on a different website, and many other situations. To serve various devices and screen sizes, favicons are stored in a variety of formats where each can be individually modified, so that the most suitable version can be served to the client.
            </p>
        </article>
        <article id="css">
            <h3>Cascading Stylesheets</h3>
            <p>
                {/* <!-- What are the main reasons to incorporate stylesheets in websites and apps? --> */}
                <strong>Stylesheets</strong> give webpages individuality while improving usability, readability, and the overall look of a website. <strong>Styles</strong> can be used to make content easier to read by setting a maximum content width in the viewport and adding margin and padding to move text away from box boundaries. Colors and text font can be modified to improve text contrast when using custom backgrounds or themes. Borders can be added to content to make it easier for the user to quickly identify distinct sections and content. Navigation button size and color can be altered so that both global and local navigation can be quickly identified by users. Content like images can be packed space efficiently within a page using features like the CSS flex box layout. Most importantly, incorporating background images and colors into makes the website much more engaging for the user. 
            </p>
            <p>
                {/* <!-- What are the 5 ways to incorporate styles? And why? --> */}
                The first and most common way to incorporate styles is through an external CSS file that is linked to an HTML file. The external file will use selectors to identify HTML elements and then specify a rule for those elements using a property:value pair. Other methods to incorporate styles involve direct modification of the HTML or Javascript files. For instance, the &lt;style&gt; tag can be used directly in the HTML file to select elements and define a rule for them. Another method is to specify a style attribute inside an individual HTML tag, this allows a unique style for an individual element. Next, in Javascript, template literals can be used to define variables that correspond to the style of a certain element with some modification. Finally, Javascript allows modifying the Document Object Model by selecting HTML tags and updating their style.
            </p>
        </article>
        <article id="forms">
            <h3>Forms</h3>
            <p>
                Web developers should aim to make forms <strong>accessible</strong> both because it improves the user experience for individuals with disabilities and because the federal government requires is as part of the Americans with Disabilities Act. There are 6 main goals for accessible forms. The first is to provide clear instructions and labels for visually impaired users rather than relying on placeholder values. The second is to make clear what form fields are mandatory and why certain information is being requested of the user. The third is to make user input efficient by enabling autofocus for the first form field, so entry can immediately start without using the mouse. The fourth is to make the form possible to fill out completely with only the keyboard for users without pointing devices. The fifth is to add tab indexing so that users are guided through the fields of a complex form in a sensible order. Finally, the sixth goal is to properly inform the user of any invalid input through screen readable validation messages.
            </p>
            <p>
                The main HTML tags used for forms are: &lt;form&gt;, &lt;input&gt;, &lt;select&gt;, &lt;options &gt;, &lt;textarea&gt;, and &lt;button&gt;. The &lt;form&gt; tag is responsible for creating the form and has <strong>action</strong> and <strong>method</strong> attributes. The action attribute specifies the URL to which the form data should be sent to. The URL can be a relative path, an absolute URL, or omitted entirely to submit the data to the same URL as the location of the form. The method attribute is used to define the HTTP method used to submit the form with GET being the default value and POST being another typical value. Complex forms can also utilize &lt;fieldset&gt; to create a border and padding around a section of the form, providing both visual clarity and improved accessibility to non-visual users. The &lt;legend&gt; tag is used to provide text on top of the &lt;fieldset&gt; to prompt the user and clarify the purpose of the form section. The &lt;label&gt; tag is also used to help the user understand the purpose of an individual input. This tag has a for attribute which is used to match the ID attribute of the input for data parsing. The &lt;input&gt; tag is used to provide users a means of providing data to the web application and can take on many shapes such as email, checkbox, or radio depending on the value of the type attribute. The name attribute is also important for parsing the data after submission and the required attribute is important for obtaining all the necessary user input and preventing empty submissions. The &lt;textarea&gt; tag is used to allow users to give a free form text response, such as feedback for the application or form, and uses rows and cols attributes to define the size of the input area. The &lt;select&gt; tag allows selecting one of the choices defined by an &lt;option&gt; tag in a dropdown and uses the name attribute for submission. The selected attribute for an &lt;option&gt; can be used to make a default choice. Finally, the &lt;button&gt; tag is used for form submission using a keyboard, mouse, touchscreen, or voice, and results in the specified form action being fulfilled.
            </p>
            <p>
                Forms are typically styled to improve the user experience of reading and interacting with the form. The size of the input field, buttons, and text are usually modified for compatibility with mobile devices and touch screens. Groups of labels and input boxes should be spaced apart to increase separation and reduce visual clutter. The display property can be used to move labels above their corresponding inputs rather than appearing in-line. Color and contrast can be used to convey to users what fields are required to fill out, what responses are invalid, and what field they currently have selected. For instance, forms can enable autofocus on the first input to allow users to immediately start entering data; a color change on the selected input can help the user realize they can begin providing input. Color changes are also used to indicate when an input has transitioned from being invalid to valid according to a specified pattern. Red asterisks are typically applied to all required fields for quick identification by the user. For complicated forms where input depends on prior entries, fields can be disabled or enabled with corresponding color or background changes, based on the current status of the form.
            </p>
        </article>
        <article id="express">
            <h3>Express</h3>
            <p>
                <strong>Node</strong> is a runtime environment, utilizing JavaScript, for developing server side web applications. Node allows executing JavaScript code outside a web browser and provides a large library of modules to facilitate faster development. <strong>Npm</strong> is a package manager that comes with Node. It is both a large online repository of Node.js packages, and a command line utility used to install said packages and manage project dependencies. With npm, <strong>Express</strong>, a web framework for Node, can be installed. Express allows web developers to perform get, post, and delete requests, as well as define the ports and routes for the manipulated data. It is also capable of serving static files, creating templates for dynamically generating responses that incorporate user data, and handle incoming data through middleware.
            </p>
        </article>
        <article id="javascript">
            <h3>JavaScript</h3>
            <p>
                {/* <!-- What are the main data types?
                How are objects, arrays, and JSON used?
                How are conditionals and loops used?
                What is object-oriented programming?
                What is functional programming? --> */}
                The main value <strong>types</strong> in JavaScript include the primitives: numbers, Booleans, strings, symbols, the special values undefined and null. The only non-primitive type is the <strong>object</strong>, which is a collection of name-value pairs where the values can be any type, even other objects. Objects support create, read, update, and delete (CRUD) operations. The properties, or names, in an object are updated or created using the '.' operator which can also be used to retrieve an associated value. Arrays are a special case of objects where the property name strings are 0-based sequential integers. Array indices can be accessed using an integer in square brackets or the string property name. Arrays have a length property and various methods like push, pop, and includes. JavaScript Object Notation (<strong>JSON</strong>) is a programming language independent means to exchange data between programs. The structure of a JSON is similar to that of an object and JavaScript has the methods stringify and parse to convert between the two. Conditionals are used for branching logic where a boolean expression determines what code to execute according to an if-then-else structure. JavaScript implements strict equality testing with the '===' operator, loose equality testing with the '==' operator, and allows for AND, OR, and NOT boolean operations. Loops are used to iterate over the elements of an iterable. When the number of iterations is known, a for loop is used. When the number of iterations is unknown, a while loop or do-while loop can be used. The 'for in' statement can be used to succinctly iterate over the properties of an object. JavaScript supports object-oriented programming (<strong>OOP</strong>) through the defining of classes which implement constructors to create objects, or instances, of that class using the 'new' keyword. OOP involves bundling data structures with associated methods to act on those methods, as well as static methods and fields who belong to the class rather than to the objects. Subclasses can be created using the 'extend' keyword on the parent class, and the subclasses inherit the properties of the super class. On the other hand, <strong>functional programming</strong> puts an emphasis on functions. Functions can be assigned to variables, receive other functions are arguments, and return functions. More advanced techniques include anonymous functions which can be defined in-line without a name with the '=&gt;' operator, closures, where functions utilize variable references that are neither defined in nor passed to the function, and default arguments.
            </p>
        </article>
        </>
    );
}
export default TopicsPage;