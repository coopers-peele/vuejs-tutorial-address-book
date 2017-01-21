new Vue({
	// We want to target the div with an id of 'contacts'
	el: '#contacts',

	// Here we can register any values or collections that hold data
	// for the application
	data: {
		contact: { surname: '', given_names:'', gender:'', dob:'' },
		contacts: [
			{
				id: 1,
				surname: 'Smith',
				given_names: 'John',
				gender: '1',
				dob: '2045-09-10'
			},
			{
				id: 1,
				surname: 'Smith',
				given_names: 'Mary',
				gender: '0',
				dob: '2046-08-05'
			}
		]
	},

	// Anything within the ready function will run when the application loads
	ready: function() {
	},

	// Methods we want to use in our application are registered here
	methods: {
		// Adds a contact to the existing contacts array
		addContact: function() {
			if (this.contact.surname) {
				this.contacts.push(this.contact);
				this.contact = { surname: '', given_names: '', gender: '', dob: '' };
			}
		},

		deleteContact: function(index) {
			if (confirm("Are you sure you want to delete this contact?")) {
				this.contacts.splice(index, 1);
			}
		}
	}
});
