let lista =[
				["task1","task2","task3"],
				["done","done2","done3"],
				["missing1","missing2","missing3"],
				["missing1","missing2","missing3"],
				["done","done2","done3"]
			];


			var ListItem = React.createClass({
				render: function(){
					return(
						 <li>{this.props.item}</li>
						)
				}

			});



			var UList = React.createClass({
			
			render: function() {
			    return (
			    	<div className="panel panel-default">
  					<div className="panel-body">
				      <ul className="list-unstyled">
				      	{
				        	this.props.list.map((task) =>
				        	{
				        		return 	<ListItem item={task} />
				        			
				        	})
				        }
				      </ul>
			       </div>
			      </div>
			    );
			  }
			});


     		var CommentBox = React.createClass({
			
			render: function() {
			    return (
			      <div className="panel panel-default">
  					<div className="panel-body">
			      	  	Hello, world! I am a CommentBox.
			       	 	<br/>
			       	 	{
			       	 		this.props.mainlist.map((listRow) =>
			       	 			{
			        				return <UList list={listRow} />
			        					
			        			}
			        		)
			        	}
			     	 </div>
			      </div>
			      	
			    );
			  }
			});


		ReactDOM.render(
		  <CommentBox mainlist={lista} />,
		  document.getElementById('content')
		);