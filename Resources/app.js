/**
* Copyright (c) 2012 David Pratt (for TideSDK).
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*	http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

console.log('This shows up in console');

// create and set menu
var menu = Titanium.UI.createMenu(),
fileItem = Titanium.UI.createMenuItem('File'),
exitItem = fileItem.addItem('Exit', function() {
  if (confirm('Are you sure you want to quit?')) {
    Titanium.App.exit();
  }
});

console.log('Some error happened above, and this does not show up in console, and no visible error was thrown above');
console.log('No subsequent code in this include is evaluated...');

menu.appendItem(fileItem);
Titanium.UI.setMenu(menu);

console.log('So for instance if I define an important function here below any error condition');

var important = function() {
	console.log('Very important');
}