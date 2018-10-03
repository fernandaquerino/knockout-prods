$(document).ready(function($) {
	function viewModel(){
		var self = this;
		self.produtos = ko.observableArray(); 
		self.loading = ko.observable(false);
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
	            description: $('#descProd').val(),
	            editable: ko.observable(false)
	        });
		}

		self.removeProduto = function(){
			self.produtos.remove(this);
		}

		self.editProduto = function(index, data, event) {
			this.loading(true);
			var produtosTemp = this.produtos();
			produtosTemp[index] = data;
			produtosTemp[index].editable(false);
			this.produtos(produtosTemp);
			this.loading(false);
		}

		self.changeProductState = function () {
	        this.editable(true);
	    };
	}

	ko.applyBindings(new viewModel());
});