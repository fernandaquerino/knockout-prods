$(document).ready(function($) {
	function viewModel(){
		var self = this;
		self.produtos = ko.observableArray();  
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
	}

	ko.applyBindings(new viewModel());
});