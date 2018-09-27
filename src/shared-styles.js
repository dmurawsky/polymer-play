/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import "@polymer/polymer/polymer-element.js";

const $_documentContainer = document.createElement("template");
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      #content {
        width: 900px;
        margin: 70px auto;
      }
      .table {
        width: 230px;
        border-spacing: 0px;
      }
      .table tr td {
        text-align: left;
        border-top: solid 1px #ccc;
        margin: 0px;
      }
      .thumbnail {
        display: inline-block;
        width: 64px;
        height: 86px;
        text-align: center;
        color: #555;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }
      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }
      iron-image {
        height: 309px;
        width: 230px;
        background-color: lightgray;
        border-radius: 5px;
      }
      .flex-horizontal {
        @apply --layout-horizontal;
      }
      .flexchild {
        @apply --layout-flex;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
