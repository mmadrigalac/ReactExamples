var PanelDetail = React.createClass({
	render: function() {
		var image = "img/" + this.props.image;
		return (
			<div className="col-md-4">
			<div className="panel panel-default">
				<div className="panel-heading">
					<div className="row">
						<div className="col-md-6">
							{this.props.title}
						</div>
						<div className="col-md-6">
							<span className="pull-right">
								<img className="img-responsive img-circle" src={image} />
							</span>
						</div>
					</div>
				</div>

				<div className="panel-body">
					<p>
						{this.props.description}
					</p>
				</div>
			</div>
		</div>
			);

	}
});	

var PanelList = React.createClass({
	/*getInitialState: function() {
        return {
			panelGroup: [
				{
					row: 'cargando	...'
				}
			]
        };
    },*/
	/*componentDidMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			success: function(data) {
				console.log(data);
				this.setState({ panelGroup: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString())
			}.bind(this)
		});
	},*/
	render: function(){

		return (
			<div>
			{
				this.props.panelGroup.map((panel) => 
					{
						return <PanelDetail title={panel.title} image={panel.image} description={panel.description} />
					}
				)
			}
		</div>
		)
	}
});


var DatabaseConnection = React.createClass({
  mixins: [ReactFireMixin],
  componentDidMount: function() {
    this.bindAsArray(new Firebase("https://premier-react-test.firebaseio.com/"), "panelGroup");
  	},
  	getInitialState: function() {
        return {
			panelGroup: [
				{
					row: 'cargando	...'
				}
			]
        };
    },
  addNewPanel: function(){
	  this.firebaseRefs['panelGroup'].push({
	      title: document.getElementById('title').value, 
	      image: document.getElementById('image').value, 
	      description: document.getElementById('description').value
	    });
	    document.getElementById('title').value = '';
	    document.getElementById('image').value = '';
	    document.getElementById('description').value = '';
	},

	render: function(){
		return (
		<div className="form-group ">
			<div className="form-inline form">
			  <div className="form-group">
			    <label>Titulo</label>
			    <input id="title" type="text" className="form-control" />
			  </div>
			  &nbsp;
			  <div className="form-group">
			    <label>Imagen</label>
			    <select id="image" type="text" className="form-control" >
			    	<option value="petunia.jpg">Petunia</option>
			    	<option value="loto.jpg">Loto</option>
			    	<option value="margarita.jpg">margarita</option>
			    	<option value="gerbera.jpg">Gerbera</option>
			    </select>
			  </div> 
			  &nbsp;
			  <div className="form-group">
			    <label>Descripcion</label>
			    <textarea id="description" className="form-control" rows="1"></textarea>
			  </div>
			  &nbsp;
			  <button className="btn btn-default" onClick = {this.addNewPanel}>Submit</button>
			</div>

			<div className="row">
				<PanelList panelGroup={this.state.panelGroup} />
			  </div>
		</div>)
	}
});

React.render(
    <DatabaseConnection />,
    document.getElementById('panels')
)