var City = React.createClass({
	getInitialState:function(){
		return {class:"city",initStyle:{}};
	},
	componentDidMount:function(){
		var is=this.state.initStyle;
		var iS=this.props.initStyle||{};
		this.setState({initStyle:$.extend(is,Is)});
		var ic=this.state.class;
		var iC=this.props.className||"";
		if(!!iC){
			this.setState({class:ic+" "+iC});
		}
	},
	render:function(){
		var c =this.state.class;
		var is = this.state.initStyle;
		var h = this.props.href||"javascript:void(0);";
		var id= this.props.id||"";
		var n = this.props.name || "选择城市";
		return(
			<a href={h} id={id} className={c} style={is}>{n}</a>>
		);
	}
	
});

var search = React.createClass(
	getInitialState:function(){
		return {class:"search item",initStyle{}};
	},
	componentDidMount:function(){
		var is = this.state.initStyle;
		var iS = this.props.initStyle|| {};
		this.setState({initStyle:$.extend(is,iS)});
		var ic = this.state.class;
		var iC = this.props.className || "";
		if(!!iC){
			this.setState({class:ic+" "iC});
		}
	},
	render:function(){
		var c =this.state.class;
		var is = this.state.initStylel;
		var id = this.props.id || "";
		var n =this.props.name|| "输入商户名、地址";
		return(
			<div id={id} className={c} style={is}>{n}</div>
		);
	}

});

var Self =　React.createClass({
	getInitialState:function(){
		return {class:"self",initStyle:{}};
	},
	componentDidMount:function(){
		var is = this.state.initStyle;
		var iS = this.props.initStyle || {};
		this.setState({initStyle:$.extend(is,iS)});
		var ic = this.state.class;
		var iC = this.props.className  || "";
		if(!!iC){
			this.setState({class:ic+" "+iC});
		}
	},
	render:function(){
		var c = this.state.class;
		var is = this.state.initStyle;
		var h = this.props.href || "javascript:void(0);";
		var id = this.props.id||"";
		var n = this.props.name || "";
		return(
			<a href={h} id={id} className={c} style={is}>{n}</a>
		);
	}
});

var Header = React.createClass({
	getInitialState:function(){
		return {class:"box",initStyle:{}};
	},
	componentDidMount:function(){
		var is = this.state.initStyle;
		var iS = this.props.initStyle || {};
		this.setState({initStyle:$.extend(is,iS)});
		var ic=this.state.class;
		var iC=this.props.className || "";
		if(!!iC){
			this.setState({class:ic+" "+iC});
		}
	},
	render:function(){
		var c= this.state.class;
		var is = this.state.initStyle;
		return(
			<header className={c} style={is}>
				<City href="#" name="上海"/>
				<Search/>
				<Self href="#"/>
			</header>
		);
	}
});

var CategoryLiA = React.createClass({
	getInitalState:function(){
		return{class:"",initStyle:{},_src:"images/blank.png"};
	},
	componentDidMount:function(){
		var is = this.state.initStyle;
		var iS=this.props.initStyle || {};
		this.setState({initStyle:$.extend(is,iS)});
		var ic =this.state.class;
		var iC = this.props.className || "";
		if(!!iC){
			this.setState({class:ic+" "+iC});
		}
		var s =this.props.src;
		if(!!s){
			this.setState({src:s});
		
	},
	render:function(){
		var c = this.state.class;
		var is = thsi.state.initStyle;
		var s = this.state.src;
		var h = this.props.href || "javascript:void(0);";
		var id = this.props.id||"";
		var n = this.props.name||"";
		var _s = this.props._src||"";
		return(
			<a href={h} id={id} className={c} style={is}><img _src={s} src={s} /><br></br>{n}</a>
		);
	}
});

var CategoryLi = React.createClass({
	getInitialState:function(){
		return:{class:"",initStyel:{},arr:[]};
	},
	componentDidMount:function(){
		var is = this.state.initStyle;
		var iS = this.props.initStyle;
		this.setState({initStyle:$.extend(is,iS)});
		var ic= this.state.class;
		var iC = this.props.className||"";
		if(!!iC){
			this.setState({class:ic+" "iC});
		}
		
		var a = this.props.arr || [];
		var arr = [];
		for(var i =0;i<a.length;i++){
			var h=a[i].href;
			var_s=a[i]._src;
			var s=a[i].src;
			var n = a[i].name;
			arr.push(<CategoryLiA href={h} _src={_s} src={s} name={n} />);
		}
		this.setState({arr:arr});
	},
	render:function(){
		var c = this.state.initClass;
		var is=this.state.initStyle;
		var a=this.state.arr;
		return(
			<li className={c} style={is}>
				<div className="group">{a}</div>
			</li>
		);
	}
});

var Category = React.createClass({
	getInitialState:function(){
		return{
			class:"category",initStyle:{},arr:[]
		};
	},
	componentDidMount:function()
})

