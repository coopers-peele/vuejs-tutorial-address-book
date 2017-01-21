new Vue({
	// We want to target the div with an id of 'contacts'
	el: '#contacts',

	// Here we can register any values or collections that hold data
	// for the application
	data: {
		contact: {},
		contacts: []
	},

	// Anything within the ready function will run when the application loads
	ready: function() {
	},

	// Methods we want to use in our application are registered here
	methods: {
		// Adds an contact to the existing contacts array
		addContact: function() {
			if (this.contact.name) {
				this.contacts.push(this.contact);
				this.contact = { name: '', description: '', date: '' };
			}
		},

		deleteContact: function(index) {
			if (confirm("Are you sure you want to delete this contact?")) {
				this.contacts.splice(index, 1);
			}
		}
	}
});
