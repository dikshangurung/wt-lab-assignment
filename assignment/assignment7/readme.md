# Date-of-Assignment: June 19,2020
# Date of Submission: June 19,2020

# Terminology:
# PHP: 
>PHP is a general-purpose scripting language geared toward web development.It is known as a general-purpose scripting language that can be used to develop dynamic and >interactive websites. It was among the first server-side languages that could be embedded into HTML, making it easier to add functionality to web pages without needing >to call external files for data.

## My steps to setup local host file:
- Download and install the latest version of XAMPP.
- Run Apache and MySQL.
- Goto C:\xampp\htdocs and create a folder eg: "webtech"
- Inside I created two folders >hello with hello.php file and >second with second.php file.I created the .php file from a text editor.
- Goto C:\xampp\apache\conf\extra\httpd-vhosts.conf then write 
> <VirtualHost *:80>
> ###
> DocumentRoot "C:/xampp/htdocs/webtech/hello/hello.php"
> ###
> ServerName hello.local
> ###
> </VirtualHost
> ###
> <VirtualHost *:80>
> ###
> DocumentRoot "C:/xampp/htdocs/webtech/second/second.php"
> ###
> ServerName second.local
> ###
> </VirtualHost
- Goto C:\Windows\System32\drivers\etc\hosts and write:
> - 127.0.0.1	hello.local
> - 127.0.0.1	second.local
> - This is to give ip address to our local server so that we can directly access the file through web brower by simply typing the domain name.
- Restart Apache and MySQl.Assignment is concluded.
