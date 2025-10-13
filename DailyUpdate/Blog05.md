## 
Background
General
General Style Rules
General Formatting Rules
General Meta Rules
HTML
HTML Style Rules
HTML Formatting Rules
CSS
CSS Style Rules
CSS Formatting Rules
CSS Meta Rules
Parting Words
Background
This document defines formatting and style rules for HTML and CSS. It aims at improving collaboration, code quality, and enabling supporting infrastructure. It applies to raw, working files that use HTML and CSS, including Sass and GSS files. Tools are free to obfuscate, minify, and compile as long as the general code quality is maintained.

General
General Style Rules
Protocol
Use HTTPS for embedded resources where possible.

Always use HTTPS (https:) for images and other media files, style sheets, and scripts, unless the respective files are not available over HTTPS.

<!-- Not recommended: omits the protocol -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Not recommended: uses HTTP -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<!-- Recommended -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
/* Not recommended: omits the protocol */
@import '//fonts.googleapis.com/css?family=Open+Sans';

/* Not recommended: uses HTTP */
@import 'http://fonts.googleapis.com/css?family=Open+Sans';
/* Recommended */
@import 'https://fonts.googleapis.com/css?family=Open+Sans';
General Formatting Rules
Indentation
Indent by 2 spaces at a time.

Don’t use tabs or mix tabs and spaces for indentation.

<ul>
  <li>Fantastic
  <li>Great
</ul>
.example {
  color: blue;
}
Capitalization
Use only lowercase.

All code has to be lowercase: This applies to HTML element names, attributes, attribute values (unless text/CDATA), CSS selectors, properties, and property values (with the exception of strings).

<!-- Not recommended -->
<A HREF="/">Home</A>
<!-- Recommended -->
<img src="google.png" alt="Google">
/* Not recommended */
color: #E5E5E5;
/* Recommended */
color: #e5e5e5;
Trailing Whitespace
Remove trailing white spaces.

Trailing white spaces are unnecessary and can complicate diffs.

<!-- Not recommended -->
<p>What?_
<!-- Recommended -->
<p>Yes please.