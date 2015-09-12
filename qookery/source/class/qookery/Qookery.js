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
*/

/**
 * Static class providing access to main Qookery features
 */
qx.Class.define("qookery.Qookery", {

	type: "static",

	statics: {

		/**
		 * Option: Default value of <code>live-update</code> attribute for components that support it
		 */
		OPTION_DEFAULT_LIVE_UPDATE: "default-live-update",

		/**
		 * Option: Default value of <code>native-context-menu</code> attribute for components that support it
		 */
		OPTION_DEFAULT_NATIVE_CONTEXT_MENU: "default-native-context-menu",

		/**
		 * Service: currently running Qooxdoo application
		 */
		SERVICE_APPLICATION: "Application",

		/**
		 * Service: default model provider
		 */
		SERVICE_MODEL_PROVIDER: "ModelProvider",

		/**
		 * Service: Qookery registry
		 */
		SERVICE_REGISTRY: "Registry",

		/**
		 * Service: currently set resource loader
		 */
		SERVICE_RESOURCE_LOADER: "ResourceLoader",

		__OPTIONS: { },

		/**
		 * Return an option's value
		 *
		 * @param optionName {String} name of option
		 * @param defaultValue {any} value to return in case option is not set
		 *
		 * @return {any} option value
		 */
		getOption: function(optionName, defaultValue) {
			var value = qookery.Qookery.__OPTIONS[optionName];
			if(value === undefined) return defaultValue;
			return value;
		},

		/**
		 * Set an option's value
		 *
		 * @param optionName {String} name of option
		 * @param value {any} new option value
		 */
		setOption: function(optionName, value) {
			qookery.Qookery.__OPTIONS[optionName] = value;
		},

		/**
		 * Return the Qookery registry
		 *
		 * @return {qookery.IRegistry} the registry
		 */
		getRegistry: function() {
			return qookery.internal.Registry.getInstance();
		},

		/**
		 * Return a service
		 *
		 * @param serviceName {String} symbolic name of the service
		 *
		 * @return {Object} the instance of the required service or <code>null</code> if not available
		 */
		getService: function(serviceName) {
			return qookery.internal.Registry.getInstance().getService(serviceName);
		},

		/**
		 * Create a new Qookery form parser
		 *
		 * <p>You can use the parser for parsing XML documents in order to create a new form
		 * components. Form components may then be displayed at any time by adding their
		 * main widget (currently always a composite) to the children list
		 * of container widgets.</p>
		 *
		 * <p>A demonstration of how to correctly use the form parser is:</p>
		 *
		 * <pre class="javascript">
		 * var parser = qookery.Qookery.createNewParser();
		 * try {
		 *	var formComponent = parser.parse(xmlDocument);
		 *	var mainWidget = formComponent.getMainWidget();
		 *	container.add(mainWidget);
		 * }
		 * catch(error) {
		 *	// Handle the exception
		 * }
		 * finally {
		 *	parser.dispose();
		 * }
		 * </pre>

		 * @param variables {Map ? null} optional variables to pass to generated forms
		 *
		 * @return {qookery.IFormParser} newly created instance of form parser
		 */
		createFormParser: function(variables) {
			return new qookery.internal.FormParser(variables);
		}
	}
});
