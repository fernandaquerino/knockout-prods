$(document).ready(function($) {
	function viewModel(){
		var self = this;
		self.produtos = ko.observableArray(); 
		self.Editable = ko.observable(false); 
		// self.produtos = ko.observableArray([
		// 	{name: 'Iphone', description: 'celular'},
		// 	{name: 'Galaxy', description: 'celular'},
		// 	{name: 'PS4', description: 'video game'}
		// ]);

		// self.addProduto = function(){
		// 	self.produtos.push({name: $('#nomeProd').val(), description: $('#descProd').val()})
		// }

		self.addProduto = function(){
	        self.produtos.push({
	            name: $('#nomeProd').val(),
	            description: $('#descProd').val()
	        });
		}

		self.removeProduto = function(){
			self.produtos.remove(this);
		}

		self.editProduto = function () {
	        self.Editable(!self.Editable());
	    };
	}

	ko.applyBindings(new viewModel());
});