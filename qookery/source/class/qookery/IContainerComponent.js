/*
	Qookery - Declarative UI Building for Qooxdoo

	Copyright (c) Ergobyte Informatics S.A., www.ergobyte.gr

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

	$Id$
*/

/**
 * Interface for components that are containers of other components
 */
qx.Interface.define("qookery.IContainerComponent", {

	extend: qookery.IComponent,
	
	members: {
		
		/**
		 * Add a component as a child of this component
		 * 
		 * @param childComponent {qookery.IComponent} the component to add to this component
		 * 
		 * @throw an exception is thrown in case this component does not support children
		 */
		addChild: function(component) { },
		
		listChildren: function() { }
	}
});
