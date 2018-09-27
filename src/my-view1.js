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
import "@polymer/iron-image/iron-image.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import "./shared-styles.js";

class MyView1 extends PolymerElement {
  _handleResponse(_, request) {
    var response = request.response;
    response.toc = response.toc.map(function(item, i) {
      item.name = "Section " + (i + 1);
      return item;
    });
    this.details = response;
    // this.echo = JSON.stringify(response, null, 2);
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <iron-ajax auto
        url="https://d1re4mvb3lawey.cloudfront.net/pg1017/index.json"
        handle-as="json"
        on-response="_handleResponse"
      ></iron-ajax>
      <div id="content">
        <div class="container flex-horizontal">
          <div style="margin-right: 20px;">
            <iron-image sizing="cover" preload src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
            <p id="isbn"><strong>ISBN</strong> | {{details.isbn}}</p>
            <p id="authors"><strong>Authors</strong> | <template is="dom-repeat" items="[[details.contributors]]">{{item}} </template></p>
            <p id="publishedDate"><strong>Published</strong> | {{details.date}}</p>
          </div>
          <div class="flexchild">
            <h1 id="title">{{details.title}}</h1>
            <hr/>
            <strong id="toc" style="margin-bottom: 2px;">Table of Contents</strong>
            <table id="detailsTable" class="table">
              <tbody>
                <template is="dom-repeat" items="[[details.toc]]"><tr><td><a href="#{{item.file}}">{{item.name}}</a></td><td style="text-align:right;">{{item.first}}</td></tr></template>
              </tbody>
            </table>
          </div>
        </div>
        <!--<pre>{{echo}}</pre>-->
      </div>
    `;
  }
}

window.customElements.define("my-view1", MyView1);
