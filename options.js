// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
function myFunction() {
var text = "";
var i; 
var lastnumber = document.getElementById("myText").value;
for (i = 0; i < lastnumber ; i++) {
  text +=  i + ",";
}
document.getElementById("demo").innerHTML = text;


}
