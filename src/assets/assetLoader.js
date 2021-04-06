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

import imgHomeHeroImport from './dev-indie-hero.png';
import imgLogoFullImport from './brand/logo/logo-full.png';
import imgLogoBlackImport from './brand/logo/logo-black.png';
import imgLogoWhiteImport from './brand/logo/logo-white.png';
import imgProjectsThumbImport from './projects-thumb.png';
import imgProjectsThumbTransparentImport from './projects-thumb-transparent.png';
import imgProjectsThumbTransparentShadowImport from './projects-thumb-transparent-shadow.png';
import imgAvatarImport from './avatar.jpg';
import imgTestImport from './test.png';
import imgLogoPrimaryImport from './brand/logo/logo-primary.png';
import imgLogoTestImport from './logotest.png';
import imgLogoTest2Import from './logotest2.png';
import imgBlankImport from './blank.png';
import imgBlankYellowImport from './blankYellow.png';
import imgTestIllImport from './test-ill.png';
import imgTestIllBlueImport from './test-ill-blue.png';
import imgSomehowTextImport from './somehow-text.png';
import imgHeroMainImport from './hero-main.jpg';
import imgHeroSecondaryImport from './hero-secondary.svg';
import imgHeroOutlineImport from './hero-outline.svg';
import imgIllProjectsImport from './ill-projects.png';
// import imgButtonOutline1Import from './button-outline-1.svg';
import imgButtonOutline1Import from './button-outline-1.png';
import imgCodeImport from './code.svg';

// XXX: Should all images be imported from this location rather then direct imports
// to avoid file name changes stuffing up file paths in multiple locations?
export const imgHomeHero = imgHomeHeroImport;
export const imgLogoFull = imgLogoFullImport;
export const imgLogoBlack = imgLogoBlackImport;
export const imgLogoWhite = imgLogoWhiteImport;
export const imgLogoPrimary = imgLogoPrimaryImport;
export const imgProjectsThumb = imgProjectsThumbImport;
export const imgProjectsThumbTransparent = imgProjectsThumbTransparentImport;
export const imgProjectsThumbTransparentShadow = imgProjectsThumbTransparentShadowImport;
export const imgAvatar = imgAvatarImport;
export const imgLogoTest = imgLogoTestImport;
export const imgLogoTest2 = imgLogoTest2Import;
export const imgBlank = imgBlankImport;
export const imgBlankYellow = imgBlankYellowImport;
export const imgTestIll = imgTestIllImport;
export const imgTestIllBlue = imgTestIllBlueImport;
export const imgSomehowText = imgSomehowTextImport;
export const imgIllProjects = imgIllProjectsImport;
export const imgCode = imgCodeImport;

export const imgHeroMain = imgHeroMainImport;
export const imgHeroSecondary = imgHeroSecondaryImport;
export const imgHeroOutline = imgHeroOutlineImport;

export const imgButtonOutline1 = imgButtonOutline1Import;
