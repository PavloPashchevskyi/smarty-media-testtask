# SmartyMediaTesttask
This is testtask created by Pavlo Pashchevskyi for Smarty Media company.

To install that program, please, do the following.

1. Unpack the archive send to you by email to the directory, where your sites is located.
2. In "var" directory of the project create "logs" directory, if it has not yet presented there
3. In application/config/ directory copy options.sample.php file 
    to the same directory, but with the name of "options.php" 
    and change the paremeters there to YOUR parameters, if it is needed.

4. Download and install composer if it is not installed yet. Here (https://getcomposer.org/doc/00-intro.md) 
    you can find description how to do that.

    4.1. From directory, in which project has been clonned, please, execute the following command:

        composer install

5. Configure your apache virtual host like this (change paths to yours):

    <VirtualHost *:80>
        ServerName mvc.loc
        ServerAlias www.mvc.loc
        ServerAdmin ppd@ppd-N76VM
        DocumentRoot /path/to/your/sites/directory/mvc
        <Directory /path/to/your/sites/directory/mvc>
            Options FollowSymLinks MultiViews
            AllowOverride All
            require all granted
        </Directory>
        ErrorLog /path/to/your/sites/directory/mvc/var/logs/error.log
        LogLevel warn
        ServerSignature On
    </VirtualHost>

Where "mvc" is the name of this site (change to your).

If you have any questions, please, write googalltooth@gmail.com