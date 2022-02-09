(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1290:function(t,e,r){t.exports=r.p+"assets/img/workflow.1ff166e8.png"},1291:function(t,e,r){t.exports=r.p+"assets/img/stripe_node.3b397246.png"},1292:function(t,e,r){t.exports=r.p+"assets/img/stripe1_node.198acb9a.png"},1293:function(t,e,r){t.exports=r.p+"assets/img/stripe2_node.ee16494e.png"},2045:function(t,e,r){"use strict";r.r(e);var o=r(26),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"stripe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stripe"}},[t._v("#")]),t._v(" Stripe")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://stripe.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stripe"),o("OutboundLink")],1),t._v(" offers payment processing software and application programming interfaces for e-commerce websites and mobile applications.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),o("p",[t._v("You can find authentication information for this node "),o("RouterLink",{attrs:{to:"/nodes/credentials/Stripe/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"basic-operations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic operations")]),t._v(" "),o("Resource",{attrs:{node:"n8n-nodes-base.stripe"}}),t._v(" "),o("h2",{attrs:{id:"example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),o("p",[t._v("This workflow allows you to create a new customer, create a card token, and associate this token as that customer's card. This example usage workflow would use the following nodes.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),o("li",[o("a",{attrs:{href:""}},[t._v("Stripe")])])]),t._v(" "),o("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1290),alt:"A workflow with the Stripe node"}})]),t._v(" "),o("h3",{attrs:{id:"_1-start-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),o("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),o("h3",{attrs:{id:"_2-stripe-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-stripe-node"}},[t._v("#")]),t._v(" 2. Stripe node")]),t._v(" "),o("ol",[o("li",[t._v("First enter your Stripe API credentials. You can learn how to create that "),o("RouterLink",{attrs:{to:"/nodes/credentials/Stripe/"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("li",[t._v("Fill in the remaining parameters as follows:\n"),o("ul",[o("li",[o("strong",[t._v("Resource")]),t._v(": Select the entity you want to work with, "),o("strong",[t._v("Customer")]),t._v(" in this example.")]),t._v(" "),o("li",[o("strong",[t._v("Operation")]),t._v(": Select the action to perform, "),o("strong",[t._v("Create")]),t._v(" in this example.")]),t._v(" "),o("li",[o("strong",[t._v("Name")]),t._v(": Enter the customer name.")]),t._v(" "),o("li",[o("strong",[t._v("Additional Fields")]),t._v(": Provide any further details, available options are: Address, Description, Email, Metadata, and Shipping.")]),t._v(" "),o("li",[o("strong",[t._v("Type")]),t._v(": The type of token to create, "),o("strong",[t._v("Card Token")]),t._v(" by default.")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1291),alt:"The Stripe node"}})]),t._v(" "),o("h3",{attrs:{id:"_3-stripe1-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-stripe1-node"}},[t._v("#")]),t._v(" 3. Stripe1 node")]),t._v(" "),o("ol",[o("li",[t._v("First enter your Stripe API credentials as with the first node.")]),t._v(" "),o("li",[t._v("Fill in the remaining parameters as follows:\n"),o("ul",[o("li",[o("strong",[t._v("Resource")]),t._v(": Select the entity you want to work with, "),o("strong",[t._v("Token")]),t._v(" in this example.")]),t._v(" "),o("li",[o("strong",[t._v("Operation")]),t._v(": Select the action to perform, "),o("strong",[t._v("Create")]),t._v(" in this example.")]),t._v(" "),o("li",[o("strong",[t._v("Type")]),t._v(": The type of token to create, "),o("strong",[t._v("Card Token")]),t._v(" by default.")]),t._v(" "),o("li",[o("strong",[t._v("Card Number")]),t._v(": Enter the customer credit card number.")]),t._v(" "),o("li",[o("strong",[t._v("CVC")]),t._v(": Enter the security code for this card.")]),t._v(" "),o("li",[o("strong",[t._v("Expiration Month")]),t._v(": Enter the expiration month for this card.")]),t._v(" "),o("li",[o("strong",[t._v("Expiration Year")]),t._v(": Enter the expiration year for this card.")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1292),alt:"The Stripe1 node"}})]),t._v(" "),o("h3",{attrs:{id:"_4-stripe2-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-stripe2-node"}},[t._v("#")]),t._v(" 4. Stripe2 node")]),t._v(" "),o("ol",[o("li",[t._v("First enter your Stripe API credentials as with the previous node.")]),t._v(" "),o("li",[t._v("Fill in the remaining parameters as follows:\n"),o("ul",[o("li",[o("strong",[t._v("Resource")]),t._v(": Select the entity you want to work with, "),o("strong",[t._v("Customer Card")]),t._v(" in this example.")]),t._v(" "),o("li",[o("strong",[t._v("Operation")]),t._v(": Select the action to perform, "),o("strong",[t._v("Add")]),t._v(" in this example.")]),t._v(" "),o("li",[o("strong",[t._v("Customer ID")]),t._v(": Enter the customer ID generated by the first node.")]),t._v(" "),o("li",[o("strong",[t._v("Card Token")]),t._v(": Enter the token generated by the second node.")]),t._v(" "),o("li",[o("strong",[t._v("Type")]),t._v(": The type of token to create, "),o("strong",[t._v("Card Token")]),t._v(" by default.")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1293),alt:"The Stripe2 node"}})])],1)}),[],!1,null,null,null);e.default=s.exports}}]);