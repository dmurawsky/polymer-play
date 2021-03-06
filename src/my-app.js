/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import {
  setPassiveTouchGestures,
  setRootPath
} from "@polymer/polymer/lib/utils/settings.js";
import "@polymer/app-layout/app-drawer/app-drawer.js";
import "@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-header-layout/app-header-layout.js";
import "@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@polymer/app-route/app-location.js";
import "@polymer/app-route/app-route.js";
import "@polymer/iron-pages/iron-pages.js";
import "@polymer/iron-selector/iron-selector.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "./my-icons.js";
import "./my-view1.js";

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          font-size: 30px;
        }

        app-header svg {
          fill: currentColor;
          width: 50px;
          position: relative;
          top: 20px;
        }
        #siteTitle {
          position: relative;
          bottom: 15px;
        }
      </style>

      <app-header-layout has-scrolling-region="">
        <app-header slot="header" condenses="" reveals="" effects="waterfall">
          <app-toolbar>
            <div id="siteTitle" main-title="">
          <svg widthxmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve"><path d="M14.75,74.515h15.284v5.322l3.374-5.322h2.832l3.374,5.322v-5.322H81.25V28.407h-7.436V17.998h-0.75  c-0.74,0-17.78,0.084-25.064,6.922c-4.252-3.991-11.826-5.684-17.546-6.398l-0.42-0.066v0.017c-3.869-0.459-6.802-0.474-7.099-0.474  h-0.75v10.409H14.75V74.515z M73.814,68.264V29.907h5.936v43.108H49.194c2.366-1.542,10.063-6.138,17.798-6.138  c2.087,0,4.041,0.338,5.808,1.004L73.814,68.264z M48.75,26.274c5.865-5.897,20.133-6.663,23.564-6.761v46.62  c-1.658-0.502-3.443-0.756-5.322-0.756c-7.832,0-15.384,4.301-18.242,6.131V26.274z M39.614,22.026  c2.987,0.983,5.747,2.348,7.636,4.248v45.233c-1.484-0.95-4.239-2.563-7.636-3.898V22.026z M39.614,69.25  c3.337,1.374,5.971,2.97,7.191,3.765h-7.191V69.25z M34.358,73.015l0.466-0.734l0.466,0.734H34.358z M31.534,74.515v-1.5v-5.967  v-1.52v-45.31c1.339,0.226,3.94,0.685,5.779,1.131c0.287,0.07,0.559,0.139,0.801,0.208v0.009v45.492v1.612v4.345v1.5v0.154  l-0.098-0.154l-0.951-1.5l-2.241-3.536l-2.241,3.536l-0.951,1.5l-0.098,0.154V74.515z M23.686,19.512  c1.146,0.033,3.503,0.141,6.349,0.489v45.41c-0.342-0.016-0.684-0.034-1.026-0.034c-1.879,0-3.664,0.254-5.322,0.756V19.512z   M16.25,29.907h5.936v38.357l1.015-0.383c1.767-0.667,3.721-1.004,5.808-1.004c0.343,0,0.685,0.026,1.026,0.044v6.094H16.25V29.907z  "/><path d="M67.809,32.986v-1.5c-7.612,0-14.596,4.232-14.89,4.412l0.785,1.278C53.772,37.135,60.615,32.986,67.809,32.986z"/><path d="M67.809,42.28v-1.5c-7.612,0-14.596,4.232-14.89,4.413l0.784,1.278C53.772,46.429,60.629,42.28,67.809,42.28z"/><path d="M67.809,50.074c-7.612,0-14.596,4.232-14.89,4.412l0.785,1.278c0.068-0.042,6.911-4.19,14.104-4.19V50.074z"/><path d="M27.908,86.25c-1.236,0-2.242,1.006-2.242,2.242s1.006,2.242,2.242,2.242s2.242-1.006,2.242-2.242  S29.145,86.25,27.908,86.25z M27.908,90.234c-0.961,0-1.742-0.782-1.742-1.742s0.781-1.742,1.742-1.742s1.742,0.782,1.742,1.742  S28.869,90.234,27.908,90.234z"/><path d="M8.191,27.812l-0.99,2.008l-2.217,0.322l1.604,1.563L6.21,33.912l1.981-1.042l1.982,1.042l-0.378-2.207l1.603-1.563  L9.184,29.82L8.191,27.812z M9.259,31.53l0.251,1.468l-1.318-0.693l-1.317,0.692l0.252-1.468l-1.067-1.04l1.475-0.214l0.658-1.335  l0.66,1.335l1.473,0.214L9.259,31.53z"/><path d="M28.655,8.205l-0.685-1.386l-0.684,1.386l-1.529,0.223l1.106,1.079l-0.261,1.523l1.367-0.719l1.369,0.719l-0.262-1.523  l1.107-1.079L28.655,8.205z M28.676,10.116l-0.705-0.37l-0.703,0.37l0.134-0.784l-0.569-0.556l0.787-0.114l0.352-0.713l0.353,0.713  l0.788,0.114l-0.57,0.556L28.676,10.116z"/><path d="M84.553,68.067l1.106,1.079l-0.261,1.523l1.368-0.719l1.368,0.719l-0.261-1.523l1.106-1.079l-1.529-0.223l-0.685-1.385  l-0.685,1.385L84.553,68.067z M86.767,67.588l0.353,0.713l0.787,0.114l-0.569,0.556l0.134,0.785l-0.704-0.37l-0.704,0.37  l0.134-0.785l-0.569-0.556l0.787-0.114L86.767,67.588z"/><path d="M86.767,14.135l-0.902,2.777h-2.919l2.36,1.717l-0.901,2.776l2.362-1.716l2.361,1.716l-0.901-2.776l2.36-1.716h-2.919  L86.767,14.135z M87.639,18.438l0.538,1.658l-1.41-1.025l-1.411,1.025l0.538-1.658l-1.411-1.026h1.745l0.539-1.658l0.538,1.658  h1.745L87.639,18.438z"/><path d="M78.811,9.751c1.236,0,2.242-1.006,2.242-2.242s-1.006-2.242-2.242-2.242s-2.242,1.006-2.242,2.242  S77.574,9.751,78.811,9.751z M78.811,5.767c0.961,0,1.742,0.782,1.742,1.742s-0.781,1.742-1.742,1.742s-1.742-0.782-1.742-1.742  S77.85,5.767,78.811,5.767z"/><path d="M86.517,48.986c0,0.985,0.801,1.786,1.786,1.786s1.786-0.801,1.786-1.786S89.288,47.2,88.303,47.2  S86.517,48.001,86.517,48.986z M88.303,47.7c0.709,0,1.286,0.577,1.286,1.286s-0.577,1.286-1.286,1.286s-1.286-0.577-1.286-1.286  S87.594,47.7,88.303,47.7z"/><path d="M12.277,17.155c0,1.302,1.059,2.361,2.36,2.361s2.36-1.059,2.36-2.361s-1.059-2.361-2.36-2.361S12.277,15.853,12.277,17.155  z M14.638,15.294c1.025,0,1.86,0.835,1.86,1.861s-0.835,1.861-1.86,1.861s-1.86-0.835-1.86-1.861S13.612,15.294,14.638,15.294z"/><path d="M21.786,88.029l-0.123,0.484c0.325,0.082,0.655,0.156,0.988,0.223l0.098-0.49C22.424,88.182,22.104,88.109,21.786,88.029z"/><path d="M6.325,68.853c0,0.328,0.008,0.654,0.023,0.979l0.5-0.024c-0.016-0.317-0.023-0.635-0.023-0.955  c0-0.328,0.008-0.656,0.024-0.986l-0.5-0.024C6.333,68.18,6.325,68.517,6.325,68.853z"/><path d="M11.573,82.448c0.442,0.49,0.914,0.964,1.404,1.41l0.336-0.37c-0.478-0.435-0.938-0.897-1.369-1.375L11.573,82.448z"/><path d="M18.134,86.72l-0.215,0.452c0.601,0.284,1.22,0.541,1.84,0.763l0.168-0.471C19.322,87.248,18.719,86.998,18.134,86.72z"/><path d="M16.423,85.803c-0.553-0.332-1.095-0.696-1.612-1.081l-0.299,0.401c0.53,0.395,1.087,0.768,1.653,1.108L16.423,85.803z"/><path d="M9.639,78.997l-0.43,0.257c0.337,0.563,0.708,1.12,1.104,1.654l0.402-0.297C10.329,80.089,9.967,79.546,9.639,78.997z"/><path d="M8.724,77.286c-0.274-0.582-0.524-1.185-0.742-1.792l-0.471,0.169c0.224,0.623,0.479,1.241,0.762,1.837L8.724,77.286z"/><path d="M6.543,71.81c0.098,0.658,0.229,1.314,0.389,1.95l0.484-0.122c-0.156-0.621-0.283-1.26-0.379-1.901L6.543,71.81z"/><path d="M6.55,65.849l0.494,0.073c0.049-0.324,0.104-0.648,0.17-0.973l-0.49-0.099C6.656,65.183,6.599,65.516,6.55,65.849z"/><path d="M89.416,76.011l-0.5-0.009c-0.006,0.33-0.025,0.657-0.054,0.981l0.498,0.044C89.391,76.691,89.41,76.353,89.416,76.011z"/><path d="M85.87,85.063c0.494-0.555,0.945-1.152,1.343-1.773l-0.422-0.27c-0.383,0.599-0.818,1.175-1.294,1.71L85.87,85.063z"/><path d="M87.801,81.128l0.459,0.198c0.296-0.682,0.538-1.39,0.721-2.104l-0.484-0.124C88.32,79.787,88.086,80.47,87.801,81.128z"/><path d="M84.267,86.604l-0.316-0.387c-0.553,0.453-1.146,0.865-1.761,1.225l0.252,0.432C83.08,87.5,83.694,87.073,84.267,86.604z"/><path d="M80.257,88.373c-0.666,0.258-1.357,0.464-2.054,0.613l0.104,0.489c0.723-0.154,1.44-0.368,2.132-0.636L80.257,88.373z"/><path d="M76.071,89.265c-0.326,0.016-0.655,0.022-0.983,0.015l-0.01,0.5c0.096,0.002,0.192,0.003,0.288,0.003  c0.244,0,0.488-0.006,0.73-0.019L76.071,89.265z"/><rect x="88.053" y="32.377" width="0.5" height="2"/><rect x="88.053" y="28.377" width="0.5" height="2"/><rect x="88.053" y="36.377" width="0.5" height="2"/><rect x="88.053" y="40.377" width="0.5" height="2"/></svg>
          Bookywooks</div>
          </app-toolbar>
        </app-header>
      </app-header-layout>
      <my-view1></my-view1>
    `;
  }
}

window.customElements.define("my-app", MyApp);
