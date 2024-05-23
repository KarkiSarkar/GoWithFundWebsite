<?php
/*
Plugin Name: AdSense Rotator
Description: Rotates Google AdSense ad codes and generates shortcode.
Version: 3.0
Author: Nydoz Team
*/

// Function to rotate AdSense ad units with names
function rotate_named_adsense_ads() {
    // Start session
    // if (!session_id()) {
    //     session_start();
    // }

    // Check if the session variable is set
    if (!isset($_SESSION['selected_ad_unit'])) {
        // Randomly select an ad unit
        $_SESSION['selected_ad_unit'] = array_rand(get_rotated_ad_units());
    }

    // Get the selected ad unit
    $selected_ad = get_rotated_ad_units()[$_SESSION['selected_ad_unit']];
    

    // Output the ad unit
    ?>
     <?php if (!is_user_logged_in()) {?> 
        <div>
    <p style="text-align: center;"><?php echo $selected_ad['name']; ?><?php echo $selected_ad['client_id']; ?></p>
    
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=<?php echo $selected_ad['client_id']; ?>&amp;cachebuster=<?php echo time(); ?>"
     crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="<?php echo $selected_ad['client_id']; ?>"
         data-ad-slot="<?php echo $selected_ad['slot_id']; ?>"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    </div>
    <?php
}
}
 header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
// function insert_ads_after_paragraph($content) {
//     // Split content into paragraphs
//     $paragraphs = explode("</p>", $content);

//     // Insert shortcode after each paragraph
//     foreach ($paragraphs as $index => $paragraph) {
//         // Append shortcode after each paragraph
//         $paragraphs[$index] .= '[rotate_named_adsense_ads]';
//     }

//     // Join paragraphs back together
//     $content = implode("</p>", $paragraphs);

//     return $content;
// }
// add_filter('the_content', 'insert_ads_after_paragraph');
function insert_ads_after_paragraph($content) {
    // Check if it's a single post page
    if (is_single()) {
        // Split content into paragraphs
        $paragraphs = explode("</p>", $content);

        // Insert shortcode after every second paragraph
        for ($i = 2; $i < count($paragraphs); $i += 3) {
            $paragraphs[$i] .= '[rotate_named_adsense_ads]';
        }

        // Join paragraphs back together
        $content = implode("</p>", $paragraphs);
    }

    return $content;
}
add_filter('the_content', 'insert_ads_after_paragraph');

// Function to insert the AdSense ad shortcode into the header
function insert_ads_in_header() {
    $client_id = ''; // Provide a default value if $selected_ad['client_id'] is not set
    if (isset($selected_ad['client_id'])) {
        $client_id = esc_attr($selected_ad['client_id']);
    }

    // Output the <script> tag for Google AdSense asynchronously with the dynamic client ID
    echo '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' . $client_id . '" crossorigin="anonymous"></script>';

}
add_action('wp_head', 'insert_ads_in_header');

// Shortcode to insert AdSense ad unit
function rotate_named_adsense_ads_shortcode() {
    ob_start(); // Start output buffering
    rotate_named_adsense_ads(); // Rotate ad units
    return ob_get_clean(); // Return buffered content
}
add_shortcode('rotate_named_adsense_ads', 'rotate_named_adsense_ads_shortcode');

// Function to get rotated AdSense ad units
function get_rotated_ad_units() {
    // Array of named AdSense ad units
    $ad_units = array(
        'ad_unit_1' => array(
            'client_id' => 'ca-pub-1174316040160838',
            'slot_id' => '4797970803',
            'name' => 'Sponsered1',
        ),
        'ad_unit_2' => array(
            'client_id' => 'ca-pub-3624662931905437',
            'slot_id' => '2604968027',
            'name' => 'Sponsered2',
            
        ),
        'ad_unit_3' => array(
            'client_id' => 'ca-pub-7980503800144997',
            'slot_id' => '4622130462',
            'name' => 'Sponsered3',),
            
        'ad_unit_4' => array(
            'client_id' => 'ca-pub-3009520522837845',
            'slot_id' => '8226914076',
            'name' => 'Sponsered4',
            
        ),
        'ad_unit_5' => array(
            'client_id' => 'ca-pub-7166048638772841',
            'slot_id' => '3553607674',
            'name' => 'Sponsered5',
            
        ),
         'ad_unit_6' => array(
            'client_id' => 'ca-pub-3912613535459320',
            'slot_id' => '5208070319',
            'name' => 'Sponsered6',
            
        ),
        
    );


    return $ad_units;
}
