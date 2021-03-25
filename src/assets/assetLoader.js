/* This is a workaround fix for Parcel's handling of code splitting by dynamic imports.
 * When a component tree that is dynamically imported with perhaps the loadable js library
 * contains an image import, Parcel will throw an error saying...
 *
 * loadable-components: failed to asynchronously load component
 * Uncaught Error: Cannot find module 'assets/brand/logo/logo-full.png'
 *
 * To fix this, this assetLoader file with imports to any images used must be imported into
 * a component above any dynamic imports. Don't really know why it fixes it but it does.
 *
 * Also worth noting that this doesn't mean the client is suddenly forced to download all
 * the sites images at once. It still behaves as expected where it only downloads an image
 * when requested.
 *
 * Read more about it and this fix here...
 * https://github.com/parcel-bundler/parcel/issues/112#issuecomment-557346757
 */

// import '../assets/dev-indie-hero.png';
// import '../assets/brand/logo/logo-full.png';
// import '../assets/brand/logo/logo-black.png';
// import '../assets/brand/logo/logo-white.png';
// import '../assets/projects-thumb.png';

import imgHomeHeroImport from '../assets/dev-indie-hero.png';
import imgLogoFullImport from '../assets/brand/logo/logo-full.png';
import imgLogoBlackImport from '../assets/brand/logo/logo-black.png';
import imgLogoWhiteImport from '../assets/brand/logo/logo-white.png';
import imgProjectsThumbImport from '../assets/projects-thumb.png';

// XXX: Should all images be imported from this location rather then direct imports
// to avoid file name changes stuffing up file paths in multiple locations?
export const imgHomeHero = imgHomeHeroImport;
export const imgLogoFull = imgLogoFullImport;
export const imgLogoBlack = imgLogoBlackImport;
export const imgLogoWhite = imgLogoWhiteImport;
export const imgProjectsThumb = imgProjectsThumbImport;
