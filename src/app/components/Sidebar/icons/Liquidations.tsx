import * as React from 'react';

import { SidebarIcon } from './models';

export const Liquidations: SidebarIcon = {
  active: () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="prefix__b3" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#544CF2" />
          <stop offset="100%" stopColor="#D93CEF" />
        </linearGradient>
        <path id="prefix__a3" d="M12.014 22.303c.172 0 .44-.065.677-.204 5.715-3.266 7.638-4.555 7.638-8.132V6.232c0-1.085-.43-1.428-1.332-1.804-1.343-.548-4.813-1.816-6.166-2.278-.258-.086-.537-.15-.817-.15-.279 0-.558.075-.827.15-1.342.42-4.812 1.74-6.155 2.278-.902.365-1.332.72-1.332 1.804v7.735c0 3.577 1.934 4.834 7.638 8.132.236.14.494.204.676.204zm0-1.58c-.16 0-.343-.075-.612-.225-4.694-2.9-6.316-3.738-6.316-6.843V6.48c0-.44.086-.612.43-.751 1.417-.56 4.619-1.676 6.047-2.235.172-.075.333-.107.451-.107.119 0 .269.032.452.107 1.428.559 4.597 1.73 6.047 2.235.344.128.43.311.43.751v7.176c0 3.105-1.633 3.932-6.327 6.843-.258.15-.44.226-.602.226zm3.502-4.608c.398 0 .71-.322.71-.709 0-.204-.076-.365-.215-.505l-3.008-3.007 3.018-3.03c.15-.15.215-.3.215-.494 0-.387-.311-.698-.709-.698-.182 0-.333.064-.494.225l-3.03 3.008-3.007-3.008c-.14-.14-.3-.214-.494-.214-.398 0-.71.311-.71.698 0 .193.076.365.216.494l3.007 3.019L8.008 14.9c-.14.14-.215.312-.215.505 0 .387.311.71.709.71.193 0 .365-.076.505-.226l2.997-3.008 3.008 3.008c.14.14.311.225.504.225z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#0A0A0E" fillOpacity=".01" d="M0 0H24V24H0z" />
        <g fillRule="nonzero">
          <use fill="url(#prefix__b3)" xlinkHref="#prefix__a3" />
        </g>
      </g>
    </svg>
  ),

  inactive: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24">
      <g fill="none" fillRule="evenodd">
        <path fill="#0A0A0E" fillOpacity=".01" d="M0 0H24V24H0z" transform="translate(.5)" />
        <path fill="#FFF" fillRule="nonzero" d="M11.842 21.562c.236 0 .494-.119.666-.226 5.51-3.373 7.186-4.383 7.186-7.487V6.243c0-1.117-.279-1.493-1.353-1.901-1.87-.71-3.878-1.526-5.769-2.192-.258-.086-.472-.15-.73-.15-.247 0-.462.064-.72.15L5.354 4.342C4.279 4.739 4 5.126 4 6.243v7.606c0 3.104 1.719 4.039 7.187 7.487.171.107.43.226.655.226zm0-.634c-.172 0-.387-.13-.516-.215C6.6 17.64 4.58 16.792 4.58 13.784V6.308c0-.795.15-1.085.71-1.31 1.02-.398 4.897-1.892 5.929-2.278.247-.108.483-.172.623-.172.15 0 .376.075.634.172 1.03.386 4.909 1.89 5.93 2.277.558.226.708.516.708 1.31v7.477c0 3.008-2.04 3.824-6.746 6.929-.129.086-.344.215-.526.215zm3.674-5.425c.182 0 .322-.129.322-.3 0-.108-.022-.173-.108-.259l-3.426-3.426L15.73 8.09c.086-.086.108-.15.108-.247 0-.172-.14-.312-.322-.312-.097 0-.172.032-.269.13l-3.405 3.404-3.395-3.405c-.096-.097-.16-.118-.268-.118-.183 0-.323.129-.323.3 0 .097.022.173.108.248l3.427 3.427-3.427 3.426c-.086.086-.108.15-.108.258 0 .172.14.3.323.3.107 0 .172-.031.268-.128l3.395-3.395 3.405 3.395c.097.097.172.129.269.129z" opacity=".5" transform="translate(.5)" />
      </g>
    </svg>
  ),
};
