import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: link, style */

function SvgComponent(props) {
  return (
    <Svg width={512} height={512} viewBox="0 0 290.262 290.262" {...props}>
      <G
        xmlns="http://www.w3.org/2000/svg"
        id="prefix___x34_3-4k_Full_HD"
        fill="#606060">
        <Path
          d="M278.743 29.29H11.519C5.157 29.29 0 34.447 0 40.809V249.454c0 6.361 5.157 11.519 11.519 11.519h267.225c6.361 0 11.519-5.157 11.519-11.519V40.809c-.001-6.362-5.159-11.519-11.52-11.519zM56.563 185.959H33.751v15.375H54.19v4.813H33.751v18.748h-4.996v-43.748h27.809v4.812zm43.127 20.936c0 11.375-6.875 18.252-18.313 18.252-11.5 0-18.436-6.877-18.436-18.252v-25.748h5v25.748c0 8.5 5.122 13.439 13.436 13.439 8.313 0 13.313-4.939 13.313-13.439v-25.748h5v25.748zm36.44 18h-24.188v-43.748h5v39.002h19.188v4.746zm32.314 0h-24.188v-43.748h4.998v39.002h19.189v4.746zm46.249 0h-11.126v-16.998h-18.121v16.998h-11.127v-43.748h11.127v18h18.121v-18h11.126v43.748zm27.129 0h-18.376v-25.201h11.125v16.33h7.938c6.812 0 11.688-5.254 11.688-12.939 0-7.754-5.126-13.063-12.188-13.063h-18.563v-8.875h18.813c13.75 0 23.248 8.875 23.248 21.873 0 12.937-9.625 21.875-23.685 21.875zm25.403-66.96H23.037V52.327h244.188v105.608z"
          data-original="#000000"
        />
        <Path
          data-original="#000000"
          d="M106.752 143.336h19.13V125.48h11.013v-15.65h-11.013V92.439h-19.13v17.391H89.594l24.114-47.65H93.883l-25.622 49.506v13.794h38.491zM167.275 123.395l10.782-11.942 21.448 31.883h24.694l-32.114-47.535 30.144-33.621h-23.883l-31.071 35.129V62.18h-20.637v81.156h20.637z"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
