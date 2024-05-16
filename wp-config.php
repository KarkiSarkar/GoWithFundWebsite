<?php
define( 'WP_CACHE', true );


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'u999709570_gowithfund');

/** Database username */
define('DB_USER', 'u999709570_gowithfund');

/** Database password */
define('DB_PASSWORD', 'Y2>4Mst$');

/** Database hostname */
define('DB_HOST', 'localhost:3306');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '#:In1B%0)62(S8(W3ZFxyJ39XD5uoN0H&K)!VU]R5@c7h1K#68[TW|6)6d-Eum0i');
define('SECURE_AUTH_KEY', '9)GDwby4K##T_3F%2vx7PK981d&SmB0O-M6+9B0Z4;sIgkYa471gJDmF2No*G58Y');
define('LOGGED_IN_KEY', 'YsIv*ftdx646-w6tj3;8/:438ETP~B6:%]1ew8J/~l;1l:0)2VWgx29r3t*vNXb3');
define('NONCE_KEY', '4]GR7ggbG6023[|vc/pv4k4F5R%64E8VjRmETE4X1:EqFRfpYxUV4_&81vD0JsxS');
define('AUTH_SALT', 'ENQJlUY~OZ5jaOOt-bg[~3/X1fz39@dcEu(*_HB[Z5DEFUQ[u9XM]ldhzpELv0f/');
define('SECURE_AUTH_SALT', 'VXj1q(z6Wr7-uo:(D6N9fD:#396HS!DLMBb@]4ohC*V09YE3|)t(c&#wN2xa0dPy');
define('LOGGED_IN_SALT', '0od~BN7dE3X0qM@%PrxjEeZUL!Wem7D9!X%*7#xv-WMq6B63UBd78];9S3F3564S');
define('NONCE_SALT', 'sjJ#/*W5C!gBw]!bdm%8_7v9S69J/2wr0kHX7Lf0F7#B-+41i367K~!4A:|f[epW');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'gwf_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_CACHE_KEY_SALT', '93bc8588b846103c178b5c4cbfb1e217' );
define( 'DISALLOW_FILE_EDIT', true );
define( 'CONCATENATE_SCRIPTS', false );
define( 'WP_AUTO_UPDATE_CORE', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
