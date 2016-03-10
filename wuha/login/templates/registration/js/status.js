						$(function ()
		                {
		                    $("#wizard").steps({
		                        headerTag: "h2",
		                        bodyTag: "section",
		                        transitionEffect: "slideLeft"
		                    });
		                });

		                function cha(xxx){
						    var result="";
						       	if ( parseInt(xxx)/10 < 1 ) {
						       		result = '0'+xxx;
						       	}else{
						       		result = xxx;
						       	};
							return	result;
						};
		                
		                // add r pattern
		                jQuery(function($){
						    var $button = $('#add-regularpattern'),
						        $row = $('#regularpattern0').clone(),
						        $r = $('#remove-regularpattern0').clone();
						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-regularpattern'+count;
						    	count++;
						    	var x = '#regularpattern'+count;
						        $row.clone().insertAfter( $('#ceshi') ).attr("id","regularpattern"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-regularpattern"+count);
						        var xx = '#remove-regularpattern'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});
						// add r period
						jQuery(function($){
						    var $button = $('#add-regularperiod'),
						        $row = $('#regularperiod0').clone(),
						        $r = $('#remove-regularperiod0').clone();
						    
						    count=0;

						    $button.click(function(){
						    	temcount = count;
						    	var y = '#regularperiod'+temcount+'> #regularperiodend';
						    	while($(y).length==0){
						    		temcount = temcount - 1;
						    		if ( temcount <0 ) {
						    			break;
						    		}else{
						    			y = '#regularperiod'+temcount+'> #regularperiodend';
						    		};
						    	};

						    	var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
						    	var sump = 0;
						        for (var i = 0; i < regularpatternpercentage.length; i++) {
						            sump = sump + parseFloat(regularpatternpercentage[i].value);
						        };
						    	

						    	count++;
						    	var x = '#regularperiod'+count;
						    	var i = 1;
						    	var temx = "";
						    	while(i <= count){
						    		temx = '#remove-regularperiod'+(count-i);
						    		if ( $(temx).length > 0 ) {
						    			break;
						    		};
						    		i = i + 1;
						    	}
						    	
						    	if ( $(temx).length >0 ) {
						    		$row.clone().insertAfter( $(temx) ).attr("id","regularperiod"+count);
						    	}else{
						    		$row.clone().insertAfter( $('#ceshi2') ).attr("id","regularperiod"+count);
						    	};
						        
						        $r.clone().insertAfter( $(x) ).attr("id","remove-regularperiod"+count);
						        var xx = '#remove-regularperiod'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })

						        var yy = '#regularperiod'+count+'> #regularperiodstart';
						        var yyy = '#regularperiod'+count+'> #regularperiodend';
						        var yyyy = '#regularperiod'+count+'> #regularpatternpercentage';

						        


						        if ( $(y).length > 0 ) {
						        	var yyv = $(y).val();
							        if ( parseInt(yyv.split(':')[2])<59 ) {
							        	yyv = yyv.split(':')[0] + ':' + yyv.split(':')[1]+':'+cha(parseInt(yyv.split(':')[2]) + 1);
							        }else if( parseInt(yyv.split(':')[1])<59 ){
							        	yyv = yyv.split(':')[0] + ':' + cha(parseInt(yyv.split(':')[1]) + 1) + ':00';
							        }else if ( parseInt(yyv.split(':')[0])<23 ) {
							        	yyv = cha(parseInt(yyv.split(':')[0]) + 1) + ':00:00';
							        }else{
							        	yyv = "23:59:59";
							        };
						        }else{
						        	yyv = "00:00:00";
						        };
						        
						        var yyyv = "";
						        if (parseInt(yyv.split(':')[0])+3>=24 ) {
						        	yyyv = "23:59:59";
						        }else{
						        	yyyv = (parseInt(yyv.split(':')[0])+3) + ':00:00'; 
						        };
						        var yyyyv = 100 - sump;
						        $(yy).val(yyv);
						        $(yyy).val(yyyv);
						        $(yyyy).val(yyyyv);

						    });
						});
						// add r city
						jQuery(function($){
						    var $button = $('#add-regularcity'),

						        $row = $('#regularcity0').clone(),
						        $r = $('#remove-regularcity0').clone();
						    
						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-regularcity'+count;
						    	count++;
						    	var x = '#regularcity'+count;
						        $row.clone().insertAfter( $('#ceshi9') ).attr("id","regularcity"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-regularcity"+count);
						        var xx = '#remove-regularcity'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });

						});
						
						// remove r pattern
						jQuery(function($){
						    var $button = $('#remove-regularpattern0');
						    
						    $button.click(function(){
						    	$(this).remove();
						        $('#regularpattern0').remove();
						    });
						});
						// remove r period
						jQuery(function($){
						    var $button = $('#remove-regularperiod0');
						    
						    $button.click(function(){
						        $('#regularperiod0').remove();
						        $(this).remove();
						    });
						});
						// remove r city
						jQuery(function($){
						    var $button = $('#remove-regularcity0');
						    
						    $button.click(function(){
						        $('#regularcity0').remove();
						        $(this).remove();
						    });
						});

						// add h pattern
						jQuery(function($){
						    var $button = $('#add-hackpattern'),
						        $row = $('#hackpattern0').clone(),
						        $r = $('#remove-hackpattern0').clone();

						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-hackpattern'+count;
						    	count++;
						    	var x = '#hackpattern'+count;
						        $row.clone().insertAfter( $('#ceshi1') ).attr("id","hackpattern"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-hackpattern"+count);
						        var xx = '#remove-hackpattern'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});
						// add h period
						jQuery(function($){
						    var $button = $('#add-hackperiod'),
						        $row = $('#hackperiod0').clone();
						    
						        $r = $('#remove-hackperiod0').clone();

						    count=0;

						    $button.click(function(){

						    	temcount = count;
						    	var y = '#hackperiod'+temcount+'> #hackperiodend';
						    	while($(y).length==0){
						    		temcount = temcount - 1;
						    		if ( temcount <0 ) {
						    			break;
						    		}else{
						    			y = '#hackperiod'+temcount+'> #hackperiodend';
						    		};
						    	};


						    	var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");
						    	var sump = 0;
						        for (var i = 0; i < hackpatternpercentage.length; i++) {
						            sump = sump + parseFloat(hackpatternpercentage[i].value);
						        };
						    	
						    	
						    	count++;
						    	var x = '#hackperiod'+count;
						    	var i = 1;
						    	var temx = "";
						    	while(i <= count){
						    		temx = '#remove-hackperiod'+(count-i);
						    		if ( $(temx).length > 0 ) {
						    			break;
						    		};
						    		i = i + 1;
						    	}
						    	if ( $(temx).length >0 ) {
						    		$row.clone().insertAfter( $(temx) ).attr("id","hackperiod"+count);
						    	}else{
						    		$row.clone().insertAfter( $('#ceshi3') ).attr("id","hackperiod"+count);
						    	};
						        $r.clone().insertAfter( $(x) ).attr("id","remove-hackperiod"+count);
						        var xx = '#remove-hackperiod'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })

						        var yy = '#hackperiod'+count+'> #hackperiodstart';
						        var yyy = '#hackperiod'+count+'> #hackperiodend';
						        var yyyy = '#hackperiod'+count+'> #hackpatternpercentage';

							    if ( $(y).length > 0 ) {    
							    	var yyv = $(y).val();
							        if ( parseInt(yyv.split(':')[2])<59 ) {
							        	yyv = yyv.split(':')[0] + ':' + yyv.split(':')[1]+':'+cha(parseInt(yyv.split(':')[2]) + 1);
							        }else if( parseInt(yyv.split(':')[1])<59 ){
							        	yyv = yyv.split(':')[0] + ':' + cha(parseInt(yyv.split(':')[1]) + 1) + ':00';
							        }else if ( parseInt(yyv.split(':')[0])<23 ) {
							        	yyv = cha(parseInt(yyv.split(':')[0]) + 1) + ':00:00';
							        }else{
							        	yyv = "23:59:59";
							        };
							    }else{
							    	yyv = "00:00:00";
							    };
						        var yyyv = "";
						        if (parseInt(yyv.split(':')[0])+3>=24 ) {
						        	yyyv = "23:59:59";
						        }else{
						        	yyyv = (parseInt(yyv.split(':')[0])+3) + ':00:00'; 
						        };
						        var yyyyv = 100 - sump;
						        $(yy).val(yyv);
						        $(yyy).val(yyyv);
						        $(yyyy).val(yyyyv);

						    });
						});
						// add h city
						jQuery(function($){
						    var $button = $('#add-hackcity'),

						        $row = $('#hackcity0').clone(),
						        $r = $('#remove-hackcity0').clone();
						    
						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-hackcity'+count;
						    	count++;
						    	var x = '#hackcity'+count;
						        $row.clone().insertAfter( $('#ceshi10') ).attr("id","hackcity"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-hackcity"+count);
						        var xx = '#remove-hackcity'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});

						// remove h pattern
						jQuery(function($){
						    var $button = $('#remove-hackpattern0');
						    
						    $button.click(function(){
						        $('#hackpattern0').remove();
						        $(this).remove();
						    });
						});
						// remove h period
						jQuery(function($){
						    var $button = $('#remove-hackperiod0');
						    
						    $button.click(function(){
						        $('#hackperiod0').remove();
						        $(this).remove();
						    });
						});
						// remove h city
						jQuery(function($){
						    var $button = $('#remove-hackcity0');
						    
						    $button.click(function(){
						        $('#hackcity0').remove();
						        $(this).remove();
						    });
						});

						// add method
						jQuery(function($){
						    var $button = $('#add-method'),
						        $row = $('#method0').clone(),
						    
						    
						        $r = $('#remove-method0').clone();

						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-method'+count;
						    	count++;
						    	var x = '#method'+count;
						        $row.clone().insertAfter( $('#ceshi4') ).attr("id","method"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-method"+count);
						        var xx = '#remove-method'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});

						// remove method
						jQuery(function($){
						    var $button = $('#remove-method0');
						    
						    $button.click(function(){
						        $('#method0').remove();
						        $(this).remove();
						    });
						});

						// add response
						jQuery(function($){
						    var $button = $('#add-response'),
						        
						        $row = $('#response0').clone(),
						    
						        $r = $('#remove-response0').clone();

						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-response'+count;
						    	count++;
						    	var x = '#response'+count;
						        $row.clone().insertAfter( $('#ceshi5') ).attr("id","response"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-response"+count);
						        var xx = '#remove-response'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});
						// remove response
						jQuery(function($){
						    var $button = $('#remove-response0');
						    
						    $button.click(function(){
						        $('#response0').remove();
						        $(this).remove();
						    });
						});

						// add size
						jQuery(function($){
						    var $button = $('#add-size'),

						        $row = $('#size0').clone(),
						    
						        $r = $('#remove-size0').clone();

						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-size'+count;
						    	count++;
						    	var x = '#size'+count;
						        $row.clone().insertAfter( $('#ceshi6') ).attr("id","size"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-size"+count);
						        var xx = '#remove-size'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});
						// remove size
						jQuery(function($){
						    var $button = $('#remove-size0');
						    
						    $button.click(function(){
						        $('#size0').remove();
						        $(this).remove();
						    });
						});

						// add url
						jQuery(function($){
						    var $button = $('#add-url'),

						        $row = $('#url0').clone(),
						    
						        $r = $('#remove-url0').clone();

						    var count = 2;

						    $button.click(function(){

						    	var temcount = count;
						    	var yp = '#url'+temcount+'> #urlpecentage';
						    	var sump = 0;
						    	
        						var urlpecentage = document.getElementsByName("urlpecentage");
        						for (var i = 0; i < urlpecentage.length; i++) {
						            sump = sump + parseFloat(urlpecentage[i].value);
						        };
						    	
						    	
						    	count++;
						    	var x = '#url'+count;
						        $row.clone().insertAfter( $('#ceshi7') ).attr("id","url"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-url"+count);
						        var xx = '#remove-url'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })

						        var yyyy = '#url'+count+'> #urlpecentage';

						        var yy = '#url'+count+'> #fromurl'

						        var yyyyv = 100 - sump;

						        var yyv = "";

						        $(yy).val(yyv);

						        $(yyyy).val(yyyyv);

						    });
						});

						// add hurl
						jQuery(function($){
						    var $button = $('#add-hurl'),

						        $row = $('#hurl0').clone(),
						    
						        $r = $('#remove-hurl0').clone();

						    var count = 0;

						    $button.click(function(){

						    	var temcount = count;
						    	var yp = '#hurl'+temcount+'> #hurlpecentage';
						    	var sump = 0;
						    	
        						var hurlpecentage = document.getElementsByName("hurlpecentage");
        						for (var i = 0; i < hurlpecentage.length; i++) {
						            sump = sump + parseFloat(hurlpecentage[i].value);
						        };
						    	
						    	
						    	count++;
						    	var x = '#hurl'+count;
						        $row.clone().insertAfter( $('#ceshi77') ).attr("id","hurl"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-hurl"+count);
						        var xx = '#remove-hurl'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })

						        var yyyy = '#hurl'+count+'> #hurlpecentage';

						        var yy = '#hurl'+count+'> #fromhurl'

						        var yyyyv = 100 - sump;

						        var yyv = "";

						        $(yy).val(yyv);

						        $(yyyy).val(yyyyv);

						    });
						});
						// remove url
						jQuery(function($){
						    var $button = $('#remove-url0');
						    
						    $button.click(function(){
						        $('#url0').remove();
						        $(this).remove();
						    });

						    var $button = $('#remove-url1');
						    
						    $button.click(function(){
						        $('#url1').remove();
						        $(this).remove();
						    });

						    var $button = $('#remove-url2');
						    
						    $button.click(function(){
						        $('#url2').remove();
						        $(this).remove();
						    });
						});

						// remove hurl
						jQuery(function($){
						    var $button = $('#remove-hurl0');
						    
						    $button.click(function(){
						        $('#hurl0').remove();
						        $(this).remove();
						    });
						});

						// add system
						jQuery(function($){
						    var $button = $('#add-system'),
						        
						        $row = $('#system0').clone(),
						    
						        $r = $('#remove-system0').clone();

						    count=0;

						    $button.click(function(){
						    	
						    	var y = '#remove-system'+count;
						    	count++;
						    	var x = '#system'+count;
						        $row.clone().insertAfter( $('#ceshi8') ).attr("id","system"+count);
						        $r.clone().insertAfter( $(x) ).attr("id","remove-system"+count);
						        var xx = '#remove-system'+count;
						        var $b = $(xx);
						        $b.click(function(){
						        	$(x).remove();
						        	$(this).remove();
						        })
						    });
						});
						// remove system
						jQuery(function($){
						    var $button = $('#remove-system0');
						    
						    $button.click(function(){
						        $('#system0').remove();
						        $(this).remove();
						    });
						});

						// plot 3d
						jQuery(function($){
						    var $button = $('#periodplot3d');
						    
						    $button.click(function(){
						    	$('svg').remove();
						    	var regularperiodstart = document.getElementsByName("regularperiodstart");
						        var regularperiodend = document.getElementsByName("regularperiodend");
						        var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
						        var hackperiodstart = document.getElementsByName("hackperiodstart");
						        var hackperiodend = document.getElementsByName("hackperiodend");
						        var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");

						        var x = new Array();
						        var y = new Array();
						        var z = new Array();

						        for (var i = 0; i < regularperiodstart.length; i++) {
						            tems = regularperiodstart[i].value;
						            teme = regularperiodend[i].value;
						            temp = regularpatternpercentage[i].value;
						            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
						            per = (parseInt(temp) / period) ;
						            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
						            for (var j = 0; j < period; j++) {
						            	var temx = start + j;
						            	x.push(0);
						            	y.push(temx);
						            	z.push(per);
						            };
						        };

						        var regular = {
						        	x,
									y,
									z,
									mode: 'scatter',
									marker: {
									    color: '#1A6898',
									    size: 0,
									    symbol: 'circle',
									    line: {
									      color: 'rgb(0,0,0)',
									      width: 0
									    }
									},
									line: {
									    color: '#ffffff',
									    width: 0
									},
									type: 'scatter3d'
								};

								var x = new Array();
						        var y = new Array();
						        var z = new Array();

						        for (var i = 0; i < hackperiodstart.length; i++) {
						            tems = hackperiodstart[i].value;
						            teme = hackperiodend[i].value;
						            temp = hackpatternpercentage[i].value;
						            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
						            per = (parseInt(temp) / period) ;
						            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
						            for (var j = 0; j < period; j++) {
						            	var temx = start + j;
						            	x.push(1);
						            	y.push(temx);
						            	z.push(per);
						            };
						        };

						        var hack = {
						        	x,
									y,
									z,
									mode: 'scatter',
									marker: {
									    color: 'red',
									    size: 0,
									    symbol: 'circle',
									    line: {
									      color: 'rgb(0,0,0)',
									      width: 0
									    }
									},
									line: {
									    color: '#ffffff',
									    width: 0
									},
									type: 'scatter3d'
								};

								var data = [regular, hack];
								var layout = {
								  	autosize: false,
								  	width: 500,
								  	height: 400,
								  	margin: {
								    	l: 0,
								    	r: 0,
								    	b: 0,
								    	t: 65
								  	}
								};
								Plotly.newPlot('scatterplot', data, layout);
						    });
						});

						// plot
						jQuery(function($){
						    var $button = $('#periodplot');
						    
						    $button.click(function(){
						    	$('svg').remove();
						    	$('.plot-container.plotly').remove();
						    	var regularperiodstart = document.getElementsByName("regularperiodstart");
						        var regularperiodend = document.getElementsByName("regularperiodend");
						        var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
						        var hackperiodstart = document.getElementsByName("hackperiodstart");
						        var hackperiodend = document.getElementsByName("hackperiodend");
						        var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");

						        var data = new Array();

						        for (var i = 0; i < regularperiodstart.length; i++) {
						            tems = regularperiodstart[i].value;
						            teme = regularperiodend[i].value;
						            temp = regularpatternpercentage[i].value;
						            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
						            per = (parseInt(temp) / period) ;
						            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
						            for (var j = 0; j < period; j++) {
						            	var tem = new Array();
						            	var temx = start + j;
						            	tem.push(temx);
						            	tem.push(per);
						            	tem.push('#1A6898');
						            	data.push(tem);
						            };
						        };

						        for (var i = 0; i < hackperiodstart.length; i++) {
						            tems = hackperiodstart[i].value;
						            teme = hackperiodend[i].value;
						            temp = hackpatternpercentage[i].value;
						            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
						            per = (parseInt(temp) / period) ;
						            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
						            for (var j = 0; j < period; j++) {
						            	var tem = new Array();
						            	var temx = start + j;
						            	tem.push(temx);
						            	tem.push(per);
						            	tem.push('red');
						            	data.push(tem);
						            };
						        };



						        

   
				    			var margin = {top: 20, right: 15, bottom: 60, left: 60}
				      						, width = 400 - margin.left - margin.right
				      						, height = 400 - margin.top - margin.bottom;
				    
							    var x = d3.scale.linear()
							              .domain([0, d3.max(data, function(d) { return d[0]; })])
							              .range([ 0, width ]);
							    
							    var y = d3.scale.linear()
							    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
							    	      .range([ height, 0 ]);
							 
							    var chart = d3.select('#scatterplot')
												.append('svg:svg')
												.attr('width', width + margin.right + margin.left)
												.attr('height', height + margin.top + margin.bottom)
												.attr('class', 'chart')

							    var main = chart.append('g')
												.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
												.attr('width', width)
												.attr('height', height)
												.attr('class', 'main')   
							        
							    // draw the x axis
							    var xAxis = d3.svg.axis()
												.scale(x)
												.orient('bottom');

							    main.append('g')
									.attr('transform', 'translate(0,' + height + ')')
									.attr('class', 'main axis date')
									.call(xAxis);

							    // draw the y axis
							    var yAxis = d3.svg.axis()
												.scale(y)
												.orient('left');

							    main.append('g')
									.attr('transform', 'translate(0,0)')
									.attr('class', 'main axis date')
									.call(yAxis);

							    var g = main.append("svg:g"); 
							    
							    g.selectAll("scatter-dots")
							      .data(data)
							      .enter().append("svg:circle")
								          .attr("cx", function (d,i) { return x(d[0]); } )
								          .attr("cy", function (d) { return y(d[1]); } )
								          .attr("r", 1)
								          .style("fill", function(d) { return (d[2]); } );
							});
						});

						// method
						jQuery(function($){
						    var $button = $('#methodpie');
									    
						   $button.click(function(){

						   		$('svg').remove();

						   		var methodname = document.getElementsByName("methodname");
        						var methodpecentage = document.getElementsByName("methodpecentage");

        						var method = {"GET":0, "POST":0, "PUT":0, "DELETE":0, "HEAD":0, "TRACE":0, "PATCH":0, "OPTIONS":0, "CONNECT":0}

        						for (var i = 0; i < methodname.length; i++) {
						            method[methodname[i].value] = parseFloat(methodpecentage[i].value);
						        };

						       	var pie = new d3pie("#methodpieChart", {
									"header": {
										"title": {
											"text": "Method Distribution",
											"fontSize": 15,
											"font": "courier"
										},
										"location": "pie-center",
										"titleSubtitlePadding": 10
									},
									"size": {
										"canvasWidth": 500,
										"pieInnerRadius": "90%",
										"pieOuterRadius": "60%"
									},
									"data": {
										"sortOrder": "label-desc",
										"content": [
											{
												"label": "GET",
												"value": method["GET"],
												"color": "red"
											},
											{
												"label": "POST",
												"value": method["POST"],
												"color": "blue"
											},
											{
												"label": "PUT",
												"value": method["PUT"],
												"color": "yellow"
											},
											{
												"label": "DELETE",
												"value": method["DELETE"],
												"color": "orange"
											},
											{
												"label": "HEAD",
												"value": method["HEAD"],
												"color": "green"
											},
											{
												"label": "TRACE",
												"value": method["TRACE"],
												"color": "gray"
											},
											{
												"label": "PATCH",
												"value": method["PATCH"],
												"color": "purple"
											},
											{
												"label": "OPTIONS",
												"value": method["OPTIONS"],
												"color": "pink"
											},
											{
												"label": "CONNECT",
												"value": method["CONNECT"],
												"color": "lightblue"
											}
										]
									},
									"labels": {
										"outer": {
											"format": "label-percentage1",
											"pieDistance": 20
										},
										"inner": {
											"format": "none"
										},
										"mainLabel": {
											"fontSize": 11
										},
										"percentage": {
											"color": "#999999",
											"fontSize": 11,
											"decimalPlaces": 0
										},
										"value": {
											"color": "#cccc43",
											"fontSize": 11
										},
										"lines": {
											"enabled": true,
											"color": "#777777"
										},
										"truncation": {
											"enabled": true
										}
									},
									"effects": {
										"pullOutSegmentOnClick": {
											"effect": "linear",
											"speed": 100,
											"size": 8
										}
									},
									"misc": {
										"colors": {
											"segmentStroke": "#000000"
										}
									}
								});
							});
						});

						function getRandomColor() {
						    var letters = '0123456789ABCDEF'.split('');
						    var color = '#';
						    for (var i = 0; i < 6; i++ ) {
						        color += letters[Math.floor(Math.random() * 16)];
						    }
						    return color;
						}


						// response
						jQuery(function($){
						    var $button = $('#repie');
									    
						   $button.click(function(){

						   		$('svg').remove();

						   		var responsename = document.getElementsByName("responsename");
        						var responsepecentage = document.getElementsByName("responsepecentage");

        						var re = new Array();

        						for (var i = 0; i < responsename.length; i++) {
        							var tem = {"label":"", "value":0, "color":""}
        							tem["label"] = responsename[i].value;
        							tem["value"] = parseFloat(responsepecentage[i].value);
        							tem["color"] = getRandomColor();
						            re.push(tem);
						        };



						       	var pie = new d3pie("#repieChart", {
									"header": {
										"title": {
											"text": "Response Distribution",
											"fontSize": 15,
											"font": "courier"
										},
										"location": "pie-center",
										"titleSubtitlePadding": 10
									},
									"size": {
										"canvasWidth": 500,
										"pieInnerRadius": "90%",
										"pieOuterRadius": "60%"
									},
									"data": {
										"sortOrder": "label-desc",
										"content": re,
									},
									"labels": {
										"outer": {
											"format": "label-percentage1",
											"pieDistance": 20
										},
										"inner": {
											"format": "none"
										},
										"mainLabel": {
											"fontSize": 11
										},
										"percentage": {
											"color": "#999999",
											"fontSize": 11,
											"decimalPlaces": 0
										},
										"value": {
											"color": "#cccc43",
											"fontSize": 11
										},
										"lines": {
											"enabled": true,
											"color": "#777777"
										},
										"truncation": {
											"enabled": true
										}
									},
									"effects": {
										"pullOutSegmentOnClick": {
											"effect": "linear",
											"speed": 100,
											"size": 8
										}
									},
									"misc": {
										"colors": {
											"segmentStroke": "#000000"
										}
									}
								});
							});
						});



						// size
						jQuery(function($){
						    var $button = $('#sizepie');
									    
						   $button.click(function(){

						   		$('svg').remove();

						   		var datesize = document.getElementsByName("datesize");
        						var sizepecentage = document.getElementsByName("sizepecentage");

        						var re = new Array();

        						for (var i = 0; i < datesize.length; i++) {
        							var tem = {"label":"", "value":0, "color":""}
        							tem["label"] = datesize[i].value;
        							tem["value"] = parseFloat(sizepecentage[i].value);
        							tem["color"] = getRandomColor();
						            re.push(tem);
						        };



						       	var pie = new d3pie("#sizepieChart", {
									"header": {
										"title": {
											"text": "Transfer Size Distribution",
											"fontSize": 15,
											"font": "courier"
										},
										"location": "pie-center",
										"titleSubtitlePadding": 10
									},
									"size": {
										"canvasWidth": 500,
										"pieInnerRadius": "90%",
										"pieOuterRadius": "60%"
									},
									"data": {
										"sortOrder": "label-desc",
										"content": re,
									},
									"labels": {
										"outer": {
											"format": "label-percentage1",
											"pieDistance": 20
										},
										"inner": {
											"format": "none"
										},
										"mainLabel": {
											"fontSize": 11
										},
										"percentage": {
											"color": "#999999",
											"fontSize": 11,
											"decimalPlaces": 0
										},
										"value": {
											"color": "#cccc43",
											"fontSize": 11
										},
										"lines": {
											"enabled": true,
											"color": "#777777"
										},
										"truncation": {
											"enabled": true
										}
									},
									"effects": {
										"pullOutSegmentOnClick": {
											"effect": "linear",
											"speed": 100,
											"size": 8
										}
									},
									"misc": {
										"colors": {
											"segmentStroke": "#000000"
										}
									}
								});
							});
						});


						// url
						jQuery(function($){
						    var $button = $('#urlpie');
									    
						   $button.click(function(){

						   		$('svg').remove();

						   		var fromurl = document.getElementsByName("fromurl");
        						var urlpecentage = document.getElementsByName("urlpecentage");

        						var re = new Array();

        						for (var i = 0; i < fromurl.length; i++) {
        							var tem = {"label":"", "value":0, "color":""}
        							tem["label"] = fromurl[i].value;
        							tem["value"] = parseFloat(urlpecentage[i].value);
        							tem["color"] = getRandomColor();
						            re.push(tem);
						        };



						       	var pie = new d3pie("#urlpieChart", {
									"header": {
										"title": {
											"text": "From Url Distribution",
											"fontSize": 15,
											"font": "courier"
										},
										"location": "pie-center",
										"titleSubtitlePadding": 10
									},
									"size": {
										"canvasWidth": 1000,
										"pieInnerRadius": "90%",
										"pieOuterRadius": "60%"
									},
									"data": {
										"sortOrder": "label-desc",
										"content": re,
									},
									"labels": {
										"outer": {
											"format": "label-percentage1",
											"pieDistance": 20
										},
										"inner": {
											"format": "none"
										},
										"mainLabel": {
											"fontSize": 11
										},
										"percentage": {
											"color": "#999999",
											"fontSize": 11,
											"decimalPlaces": 0
										},
										"value": {
											"color": "#cccc43",
											"fontSize": 11
										},
										"lines": {
											"enabled": true,
											"color": "#777777"
										},
										"truncation": {
											"enabled": true
										}
									},
									"effects": {
										"pullOutSegmentOnClick": {
											"effect": "linear",
											"speed": 100,
											"size": 8
										}
									},
									"misc": {
										"colors": {
											"segmentStroke": "#000000"
										}
									}
								});
							});
						});

						// hurl
						jQuery(function($){
						    var $button = $('#hurlpie');
									    
						   $button.click(function(){

						   		$('svg').remove();

						   		var fromhurl = document.getElementsByName("fromhurl");
        						var hurlpecentage = document.getElementsByName("hurlpecentage");

        						var re = new Array();

        						for (var i = 0; i < fromhurl.length; i++) {
        							var tem = {"label":"", "value":0, "color":""}
        							tem["label"] = fromhurl[i].value;
        							tem["value"] = parseFloat(hurlpecentage[i].value);
        							tem["color"] = getRandomColor();
						            re.push(tem);
						        };



						       	var pie = new d3pie("#urlpieChart", {
									"header": {
										"title": {
											"text": "From Url Distribution",
											"fontSize": 15,
											"font": "courier"
										},
										"location": "pie-center",
										"titleSubtitlePadding": 10
									},
									"size": {
										"canvasWidth": 1000,
										"pieInnerRadius": "90%",
										"pieOuterRadius": "60%"
									},
									"data": {
										"sortOrder": "label-desc",
										"content": re,
									},
									"labels": {
										"outer": {
											"format": "label-percentage1",
											"pieDistance": 20
										},
										"inner": {
											"format": "none"
										},
										"mainLabel": {
											"fontSize": 11
										},
										"percentage": {
											"color": "#999999",
											"fontSize": 11,
											"decimalPlaces": 0
										},
										"value": {
											"color": "#cccc43",
											"fontSize": 11
										},
										"lines": {
											"enabled": true,
											"color": "#777777"
										},
										"truncation": {
											"enabled": true
										}
									},
									"effects": {
										"pullOutSegmentOnClick": {
											"effect": "linear",
											"speed": 100,
											"size": 8
										}
									},
									"misc": {
										"colors": {
											"segmentStroke": "#000000"
										}
									}
								});
							});
						});

						// system
						jQuery(function($){
						    var $button = $('#syspie');
									    
						   $button.click(function(){

						   		$('svg').remove();

						   		var systemname = document.getElementsByName("systemname");
        						var systempecentage = document.getElementsByName("systempecentage");

        						var re = new Array();

        						for (var i = 0; i < systemname.length; i++) {
        							var tem = {"label":"", "value":0, "color":""}
        							tem["label"] = systemname[i].value;
        							tem["value"] = parseFloat(systempecentage[i].value);
        							tem["color"] = getRandomColor();
						            re.push(tem);
						        };



						       	var pie = new d3pie("#syspieChart", {
									"header": {
										"title": {
											"text": "System Distribution",
											"fontSize": 15,
											"font": "courier"
										},
										"location": "pie-center",
										"titleSubtitlePadding": 10
									},
									"size": {
										"canvasWidth": 500,
										"pieInnerRadius": "90%",
										"pieOuterRadius": "60%"
									},
									"data": {
										"sortOrder": "label-desc",
										"content": re,
									},
									"labels": {
										"outer": {
											"format": "label-percentage1",
											"pieDistance": 20
										},
										"inner": {
											"format": "none"
										},
										"mainLabel": {
											"fontSize": 11
										},
										"percentage": {
											"color": "#999999",
											"fontSize": 11,
											"decimalPlaces": 0
										},
										"value": {
											"color": "#cccc43",
											"fontSize": 11
										},
										"lines": {
											"enabled": true,
											"color": "#777777"
										},
										"truncation": {
											"enabled": true
										}
									},
									"effects": {
										"pullOutSegmentOnClick": {
											"effect": "linear",
											"speed": 100,
											"size": 8
										}
									},
									"misc": {
										"colors": {
											"segmentStroke": "#000000"
										}
									}
								});
							});
						});

						$.fn.fonkTopla = function() {
							var toplam = 0;
							this.each(function() {
							   var deger = fonkDeger($(this).val());
							   toplam += deger;
							});
							return toplam;
						};


						function fonkDeger(veri) {
						    return (veri != '') ? parseInt(veri) : 0;
						}

						$(document).ready(function(){
							$('input[name^="methodpecentage"]').bind('keyup', function() {
								var total = $('input[name^="methodpecentage"]').fonkTopla();
								if (total == 100) {
									$('#totalmethod').attr('style','color:black').html(total);

									$('svg').remove();

							   		var methodname = document.getElementsByName("methodname");
	        						var methodpecentage = document.getElementsByName("methodpecentage");

	        						var method = {"GET":0, "POST":0, "PUT":0, "DELETE":0, "HEAD":0, "TRACE":0, "PATCH":0, "OPTIONS":0, "CONNECT":0}

	        						for (var i = 0; i < methodname.length; i++) {
							            method[methodname[i].value] = parseFloat(methodpecentage[i].value);
							        };

							       	var pie = new d3pie("#methodpieChart", {
										"header": {
											"title": {
												"text": "Method Distribution",
												"fontSize": 15,
												"font": "courier"
											},
											"location": "pie-center",
											"titleSubtitlePadding": 10
										},
										"size": {
											"canvasWidth": 500,
											"pieInnerRadius": "90%",
											"pieOuterRadius": "60%"
										},
										"data": {
											"sortOrder": "label-desc",
											"content": [
												{
													"label": "GET",
													"value": method["GET"],
													"color": "red"
												},
												{
													"label": "POST",
													"value": method["POST"],
													"color": "blue"
												},
												{
													"label": "PUT",
													"value": method["PUT"],
													"color": "yellow"
												},
												{
													"label": "DELETE",
													"value": method["DELETE"],
													"color": "orange"
												},
												{
													"label": "HEAD",
													"value": method["HEAD"],
													"color": "green"
												},
												{
													"label": "TRACE",
													"value": method["TRACE"],
													"color": "gray"
												},
												{
													"label": "PATCH",
													"value": method["PATCH"],
													"color": "purple"
												},
												{
													"label": "OPTIONS",
													"value": method["OPTIONS"],
													"color": "pink"
												},
												{
													"label": "CONNECT",
													"value": method["CONNECT"],
													"color": "lightblue"
												}
											]
										},
										"labels": {
											"outer": {
												"format": "label-percentage1",
												"pieDistance": 20
											},
											"inner": {
												"format": "none"
											},
											"mainLabel": {
												"fontSize": 11
											},
											"percentage": {
												"color": "#999999",
												"fontSize": 11,
												"decimalPlaces": 0
											},
											"value": {
												"color": "#cccc43",
												"fontSize": 11
											},
											"lines": {
												"enabled": true,
												"color": "#777777"
											},
											"truncation": {
												"enabled": true
											}
										},
										"effects": {
											"pullOutSegmentOnClick": {
												"effect": "linear",
												"speed": 100,
												"size": 8
											}
										},
										"misc": {
											"colors": {
												"segmentStroke": "#000000"
											}
										}
									});

								}else{
									$('svg').remove();
									$('#totalmethod').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							$('input[name^="systempecentage"]').bind('keyup', function() {

								var total = $('input[name^="systempecentage"]').fonkTopla();
								if (total == 100) {
									$('#totalsystem').attr('style','color:black').html(total);

									$('svg').remove();

							   		var systemname = document.getElementsByName("systemname");
	        						var systempecentage = document.getElementsByName("systempecentage");

	        						var re = new Array();

	        						for (var i = 0; i < systemname.length; i++) {
	        							var tem = {"label":"", "value":0, "color":""}
	        							tem["label"] = systemname[i].value;
	        							tem["value"] = parseFloat(systempecentage[i].value);
	        							tem["color"] = getRandomColor();
							            re.push(tem);
							        };



							       	var pie = new d3pie("#syspieChart", {
										"header": {
											"title": {
												"text": "System Distribution",
												"fontSize": 15,
												"font": "courier"
											},
											"location": "pie-center",
											"titleSubtitlePadding": 10
										},
										"size": {
											"canvasWidth": 500,
											"pieInnerRadius": "90%",
											"pieOuterRadius": "60%"
										},
										"data": {
											"sortOrder": "label-desc",
											"content": re,
										},
										"labels": {
											"outer": {
												"format": "label-percentage1",
												"pieDistance": 20
											},
											"inner": {
												"format": "none"
											},
											"mainLabel": {
												"fontSize": 11
											},
											"percentage": {
												"color": "#999999",
												"fontSize": 11,
												"decimalPlaces": 0
											},
											"value": {
												"color": "#cccc43",
												"fontSize": 11
											},
											"lines": {
												"enabled": true,
												"color": "#777777"
											},
											"truncation": {
												"enabled": true
											}
										},
										"effects": {
											"pullOutSegmentOnClick": {
												"effect": "linear",
												"speed": 100,
												"size": 8
											}
										},
										"misc": {
											"colors": {
												"segmentStroke": "#000000"
											}
										}
									});

								}else{
									$('svg').remove();
									$('#totalsystem').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							var $button = $('#add-regularperiod');

							$button.click(function(){
						        $('input[name^="regularpatternpercentage"]').bind('keyup', function() {
									var total = $('input[name^="regularpatternpercentage"]').fonkTopla();
									if (total == 100) {
										$('#totalrp').attr('style','color:black').html(total);

										$('svg').remove();
								    	$('.plot-container.plotly').remove();
								    	var regularperiodstart = document.getElementsByName("regularperiodstart");
								        var regularperiodend = document.getElementsByName("regularperiodend");
								        var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
								        var hackperiodstart = document.getElementsByName("hackperiodstart");
								        var hackperiodend = document.getElementsByName("hackperiodend");
								        var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");



								        var data = new Array();

								        for (var i = 0; i < regularperiodstart.length; i++) {
								            tems = regularperiodstart[i].value;
								            teme = regularperiodend[i].value;
								            temp = regularpatternpercentage[i].value;
								            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
								            per = (parseInt(temp) / period) ;
								            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
								            for (var j = 0; j < period; j++) {
								            	var tem = new Array();
								            	var temx = start + j;
								            	tem.push(temx);
								            	tem.push(per);
								            	tem.push('#1A6898');
								            	data.push(tem);
								            };
								        };

								        for (var i = 0; i < hackperiodstart.length; i++) {
								            tems = hackperiodstart[i].value;
								            teme = hackperiodend[i].value;
								            temp = hackpatternpercentage[i].value;
								            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
								            per = (parseInt(temp) / period) ;
								            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
								            for (var j = 0; j < period; j++) {
								            	var tem = new Array();
								            	var temx = start + j;
								            	tem.push(temx);
								            	tem.push(per);
								            	tem.push('red');
								            	data.push(tem);
								            };
								        };



								        

		   
						    			var margin = {top: 20, right: 15, bottom: 60, left: 60}
						      						, width = 400 - margin.left - margin.right
						      						, height = 400 - margin.top - margin.bottom;
						    
									    var x = d3.scale.linear()
									              .domain([0, d3.max(data, function(d) { return d[0]; })])
									              .range([ 0, width ]);
									    
									    var y = d3.scale.linear()
									    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
									    	      .range([ height, 0 ]);
									 
									    var chart = d3.select('#scatterplot')
														.append('svg:svg')
														.attr('width', width + margin.right + margin.left)
														.attr('height', height + margin.top + margin.bottom)
														.attr('class', 'chart')

									    var main = chart.append('g')
														.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
														.attr('width', width)
														.attr('height', height)
														.attr('class', 'main')   
									        
									    // draw the x axis
									    var xAxis = d3.svg.axis()
														.scale(x)
														.orient('bottom');

									    main.append('g')
											.attr('transform', 'translate(0,' + height + ')')
											.attr('class', 'main axis date')
											.call(xAxis);

									    // draw the y axis
									    var yAxis = d3.svg.axis()
														.scale(y)
														.orient('left');

									    main.append('g')
											.attr('transform', 'translate(0,0)')
											.attr('class', 'main axis date')
											.call(yAxis);

									    var g = main.append("svg:g"); 
									    
									    g.selectAll("scatter-dots")
									      .data(data)
									      .enter().append("svg:circle")
										          .attr("cx", function (d,i) { return x(d[0]); } )
										          .attr("cy", function (d) { return y(d[1]); } )
										          .attr("r", 1)
										          .style("fill", function(d) { return (d[2]); } );

									}else{
										$('svg').remove();
								    	$('.plot-container.plotly').remove();
										$('#totalrp').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="regularpatternpercentage"]').bind('keyup', function() {
								var total = $('input[name^="regularpatternpercentage"]').fonkTopla();
								if (total == 100) {
									$('#totalrp').attr('style','color:black').html(total);
									$('svg').remove();
							    	$('.plot-container.plotly').remove();
							    	var regularperiodstart = document.getElementsByName("regularperiodstart");
							        var regularperiodend = document.getElementsByName("regularperiodend");
							        var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
							        var hackperiodstart = document.getElementsByName("hackperiodstart");
							        var hackperiodend = document.getElementsByName("hackperiodend");
							        var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");



							        var data = new Array();

							        for (var i = 0; i < regularperiodstart.length; i++) {
							            tems = regularperiodstart[i].value;
							            teme = regularperiodend[i].value;
							            temp = regularpatternpercentage[i].value;
							            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
							            per = (parseInt(temp) / period) ;
							            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
							            for (var j = 0; j < period; j++) {
							            	var tem = new Array();
							            	var temx = start + j;
							            	tem.push(temx);
							            	tem.push(per);
							            	tem.push('#1A6898');
							            	data.push(tem);
							            };
							        };

							        for (var i = 0; i < hackperiodstart.length; i++) {
							            tems = hackperiodstart[i].value;
							            teme = hackperiodend[i].value;
							            temp = hackpatternpercentage[i].value;
							            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
							            per = (parseInt(temp) / period) ;
							            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
							            for (var j = 0; j < period; j++) {
							            	var tem = new Array();
							            	var temx = start + j;
							            	tem.push(temx);
							            	tem.push(per);
							            	tem.push('red');
							            	data.push(tem);
							            };
							        };



							        

	   
					    			var margin = {top: 20, right: 15, bottom: 60, left: 60}
					      						, width = 400 - margin.left - margin.right
					      						, height = 400 - margin.top - margin.bottom;
					    
								    var x = d3.scale.linear()
								              .domain([0, d3.max(data, function(d) { return d[0]; })])
								              .range([ 0, width ]);
								    
								    var y = d3.scale.linear()
								    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
								    	      .range([ height, 0 ]);
								 
								    var chart = d3.select('#scatterplot')
													.append('svg:svg')
													.attr('width', width + margin.right + margin.left)
													.attr('height', height + margin.top + margin.bottom)
													.attr('class', 'chart')

								    var main = chart.append('g')
													.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
													.attr('width', width)
													.attr('height', height)
													.attr('class', 'main')   
								        
								    // draw the x axis
								    var xAxis = d3.svg.axis()
													.scale(x)
													.orient('bottom');

								    main.append('g')
										.attr('transform', 'translate(0,' + height + ')')
										.attr('class', 'main axis date')
										.call(xAxis);

								    // draw the y axis
								    var yAxis = d3.svg.axis()
													.scale(y)
													.orient('left');

								    main.append('g')
										.attr('transform', 'translate(0,0)')
										.attr('class', 'main axis date')
										.call(yAxis);

								    var g = main.append("svg:g"); 
								    
								    g.selectAll("scatter-dots")
								      .data(data)
								      .enter().append("svg:circle")
									          .attr("cx", function (d,i) { return x(d[0]); } )
									          .attr("cy", function (d) { return y(d[1]); } )
									          .attr("r", 1)
									          .style("fill", function(d) { return (d[2]); } );
								}else{
									$('svg').remove();
								    $('.plot-container.plotly').remove();
									$('#totalrp').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							var $button = $('#add-hackperiod');

							$button.click(function(){
						        $('input[name^="hackpatternpercentage"]').bind('keyup', function() {
									var total = $('input[name^="hackpatternpercentage"]').fonkTopla();
									if (total == 100) {
										$('#totalhp').attr('style','color:black').html(total);

										$('svg').remove();
								    	$('.plot-container.plotly').remove();
								    	var regularperiodstart = document.getElementsByName("regularperiodstart");
								        var regularperiodend = document.getElementsByName("regularperiodend");
								        var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
								        var hackperiodstart = document.getElementsByName("hackperiodstart");
								        var hackperiodend = document.getElementsByName("hackperiodend");
								        var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");

								        var data = new Array();

								        for (var i = 0; i < regularperiodstart.length; i++) {
								            tems = regularperiodstart[i].value;
								            teme = regularperiodend[i].value;
								            temp = regularpatternpercentage[i].value;
								            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
								            per = (parseInt(temp) / period) ;
								            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
								            for (var j = 0; j < period; j++) {
								            	var tem = new Array();
								            	var temx = start + j;
								            	tem.push(temx);
								            	tem.push(per);
								            	tem.push('#1A6898');
								            	data.push(tem);
								            };
								        };

								        for (var i = 0; i < hackperiodstart.length; i++) {
								            tems = hackperiodstart[i].value;
								            teme = hackperiodend[i].value;
								            temp = hackpatternpercentage[i].value;
								            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
								            per = (parseInt(temp) / period) ;
								            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
								            for (var j = 0; j < period; j++) {
								            	var tem = new Array();
								            	var temx = start + j;
								            	tem.push(temx);
								            	tem.push(per);
								            	tem.push('red');
								            	data.push(tem);
								            };
								        };



								        

		   
						    			var margin = {top: 20, right: 15, bottom: 60, left: 60}
						      						, width = 400 - margin.left - margin.right
						      						, height = 400 - margin.top - margin.bottom;
						    
									    var x = d3.scale.linear()
									              .domain([0, d3.max(data, function(d) { return d[0]; })])
									              .range([ 0, width ]);
									    
									    var y = d3.scale.linear()
									    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
									    	      .range([ height, 0 ]);
									 
									    var chart = d3.select('#scatterplot')
														.append('svg:svg')
														.attr('width', width + margin.right + margin.left)
														.attr('height', height + margin.top + margin.bottom)
														.attr('class', 'chart')

									    var main = chart.append('g')
														.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
														.attr('width', width)
														.attr('height', height)
														.attr('class', 'main')   
									        
									    // draw the x axis
									    var xAxis = d3.svg.axis()
														.scale(x)
														.orient('bottom');

									    main.append('g')
											.attr('transform', 'translate(0,' + height + ')')
											.attr('class', 'main axis date')
											.call(xAxis);

									    // draw the y axis
									    var yAxis = d3.svg.axis()
														.scale(y)
														.orient('left');

									    main.append('g')
											.attr('transform', 'translate(0,0)')
											.attr('class', 'main axis date')
											.call(yAxis);

									    var g = main.append("svg:g"); 
									    
									    g.selectAll("scatter-dots")
									      .data(data)
									      .enter().append("svg:circle")
										          .attr("cx", function (d,i) { return x(d[0]); } )
										          .attr("cy", function (d) { return y(d[1]); } )
										          .attr("r", 1)
										          .style("fill", function(d) { return (d[2]); } );

									}else{
										$('svg').remove();
								    	$('.plot-container.plotly').remove();
										$('#totalhp').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="hackpatternpercentage"]').bind('keyup', function() {
								var total = $('input[name^="hackpatternpercentage"]').fonkTopla();
								if (total == 100) {
									$('#totalhp').attr('style','color:black').html(total);

									$('svg').remove();
							    	$('.plot-container.plotly').remove();
							    	var regularperiodstart = document.getElementsByName("regularperiodstart");
							        var regularperiodend = document.getElementsByName("regularperiodend");
							        var regularpatternpercentage = document.getElementsByName("regularpatternpercentage");
							        var hackperiodstart = document.getElementsByName("hackperiodstart");
							        var hackperiodend = document.getElementsByName("hackperiodend");
							        var hackpatternpercentage = document.getElementsByName("hackpatternpercentage");

							        var data = new Array();

							        for (var i = 0; i < regularperiodstart.length; i++) {
							            tems = regularperiodstart[i].value;
							            teme = regularperiodend[i].value;
							            temp = regularpatternpercentage[i].value;
							            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
							            per = (parseInt(temp) / period) ;
							            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
							            for (var j = 0; j < period; j++) {
							            	var tem = new Array();
							            	var temx = start + j;
							            	tem.push(temx);
							            	tem.push(per);
							            	tem.push('#1A6898');
							            	data.push(tem);
							            };
							        };

							        for (var i = 0; i < hackperiodstart.length; i++) {
							            tems = hackperiodstart[i].value;
							            teme = hackperiodend[i].value;
							            temp = hackpatternpercentage[i].value;
							            period = (parseInt(teme.split(':')[0]) - parseInt(tems.split(':')[0])) * 60 + parseInt(teme.split(':')[1]) - parseInt(tems.split(':')[1]);
							            per = (parseInt(temp) / period) ;
							            start = parseInt(tems.split(':')[0]) * 60 + parseInt(tems.split(':')[1]);
							            for (var j = 0; j < period; j++) {
							            	var tem = new Array();
							            	var temx = start + j;
							            	tem.push(temx);
							            	tem.push(per);
							            	tem.push('red');
							            	data.push(tem);
							            };
							        };



							        

	   
					    			var margin = {top: 20, right: 15, bottom: 60, left: 60}
					      						, width = 400 - margin.left - margin.right
					      						, height = 400 - margin.top - margin.bottom;
					    
								    var x = d3.scale.linear()
								              .domain([0, d3.max(data, function(d) { return d[0]; })])
								              .range([ 0, width ]);
								    
								    var y = d3.scale.linear()
								    	      .domain([0, d3.max(data, function(d) { return d[1]; })])
								    	      .range([ height, 0 ]);
								 
								    var chart = d3.select('#scatterplot')
													.append('svg:svg')
													.attr('width', width + margin.right + margin.left)
													.attr('height', height + margin.top + margin.bottom)
													.attr('class', 'chart')

								    var main = chart.append('g')
													.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
													.attr('width', width)
													.attr('height', height)
													.attr('class', 'main')   
								        
								    // draw the x axis
								    var xAxis = d3.svg.axis()
													.scale(x)
													.orient('bottom');

								    main.append('g')
										.attr('transform', 'translate(0,' + height + ')')
										.attr('class', 'main axis date')
										.call(xAxis);

								    // draw the y axis
								    var yAxis = d3.svg.axis()
													.scale(y)
													.orient('left');

								    main.append('g')
										.attr('transform', 'translate(0,0)')
										.attr('class', 'main axis date')
										.call(yAxis);

								    var g = main.append("svg:g"); 
								    
								    g.selectAll("scatter-dots")
								      .data(data)
								      .enter().append("svg:circle")
									          .attr("cx", function (d,i) { return x(d[0]); } )
									          .attr("cy", function (d) { return y(d[1]); } )
									          .attr("r", 1)
									          .style("fill", function(d) { return (d[2]); } );

								}else{
									$('svg').remove();
									$('.plot-container.plotly').remove();
									$('#totalhp').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							var $button = $('#add-response');

							$button.click(function(){
						        $('input[name^="responsepecentage"]').bind('keyup', function() {
									var total = $('input[name^="responsepecentage"]').fonkTopla();
									if (total == 100) {
										$('#totalresponse').attr('style','color:black').html(total);

										$('svg').remove();

								   		var responsename = document.getElementsByName("responsename");
		        						var responsepecentage = document.getElementsByName("responsepecentage");

		        						var re = new Array();

		        						for (var i = 0; i < responsename.length; i++) {
		        							var tem = {"label":"", "value":0, "color":""}
		        							tem["label"] = responsename[i].value;
		        							tem["value"] = parseFloat(responsepecentage[i].value);
		        							tem["color"] = getRandomColor();
								            re.push(tem);
								        };



								       	var pie = new d3pie("#repieChart", {
											"header": {
												"title": {
													"text": "Response Distribution",
													"fontSize": 15,
													"font": "courier"
												},
												"location": "pie-center",
												"titleSubtitlePadding": 10
											},
											"size": {
												"canvasWidth": 500,
												"pieInnerRadius": "90%",
												"pieOuterRadius": "60%"
											},
											"data": {
												"sortOrder": "label-desc",
												"content": re,
											},
											"labels": {
												"outer": {
													"format": "label-percentage1",
													"pieDistance": 20
												},
												"inner": {
													"format": "none"
												},
												"mainLabel": {
													"fontSize": 11
												},
												"percentage": {
													"color": "#999999",
													"fontSize": 11,
													"decimalPlaces": 0
												},
												"value": {
													"color": "#cccc43",
													"fontSize": 11
												},
												"lines": {
													"enabled": true,
													"color": "#777777"
												},
												"truncation": {
													"enabled": true
												}
											},
											"effects": {
												"pullOutSegmentOnClick": {
													"effect": "linear",
													"speed": 100,
													"size": 8
												}
											},
											"misc": {
												"colors": {
													"segmentStroke": "#000000"
												}
											}
										});

									}else{
										$('svg').remove();
										$('#totalresponse').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="responsepecentage"]').bind('keyup', function() {
								var total = $('input[name^="responsepecentage"]').fonkTopla();
								if (total == 100) {
									$('#totalresponse').attr('style','color:black').html(total);

									$('svg').remove();

							   		var responsename = document.getElementsByName("responsename");
	        						var responsepecentage = document.getElementsByName("responsepecentage");

	        						var re = new Array();

	        						for (var i = 0; i < responsename.length; i++) {
	        							var tem = {"label":"", "value":0, "color":""}
	        							tem["label"] = responsename[i].value;
	        							tem["value"] = parseFloat(responsepecentage[i].value);
	        							tem["color"] = getRandomColor();
							            re.push(tem);
							        };



							       	var pie = new d3pie("#repieChart", {
										"header": {
											"title": {
												"text": "Response Distribution",
												"fontSize": 15,
												"font": "courier"
											},
											"location": "pie-center",
											"titleSubtitlePadding": 10
										},
										"size": {
											"canvasWidth": 500,
											"pieInnerRadius": "90%",
											"pieOuterRadius": "60%"
										},
										"data": {
											"sortOrder": "label-desc",
											"content": re,
										},
										"labels": {
											"outer": {
												"format": "label-percentage1",
												"pieDistance": 20
											},
											"inner": {
												"format": "none"
											},
											"mainLabel": {
												"fontSize": 11
											},
											"percentage": {
												"color": "#999999",
												"fontSize": 11,
												"decimalPlaces": 0
											},
											"value": {
												"color": "#cccc43",
												"fontSize": 11
											},
											"lines": {
												"enabled": true,
												"color": "#777777"
											},
											"truncation": {
												"enabled": true
											}
										},
										"effects": {
											"pullOutSegmentOnClick": {
												"effect": "linear",
												"speed": 100,
												"size": 8
											}
										},
										"misc": {
											"colors": {
												"segmentStroke": "#000000"
											}
										}
									});

								}else{
									$('svg').remove();
									$('#totalresponse').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							var $button = $('#add-size');

							$button.click(function(){
						        $('input[name^="sizepecentage"]').bind('keyup', function() {
									var total = $('input[name^="sizepecentage"]').fonkTopla();
									if (total == 100) {
										$('#totalsize').attr('style','color:black').html(total);

										$('svg').remove();

								   		var datesize = document.getElementsByName("datesize");
		        						var sizepecentage = document.getElementsByName("sizepecentage");

		        						var re = new Array();

		        						for (var i = 0; i < datesize.length; i++) {
		        							var tem = {"label":"", "value":0, "color":""}
		        							tem["label"] = datesize[i].value;
		        							tem["value"] = parseFloat(sizepecentage[i].value);
		        							tem["color"] = getRandomColor();
								            re.push(tem);
								        };



								       	var pie = new d3pie("#sizepieChart", {
											"header": {
												"title": {
													"text": "Transfer Size Distribution",
													"fontSize": 15,
													"font": "courier"
												},
												"location": "pie-center",
												"titleSubtitlePadding": 10
											},
											"size": {
												"canvasWidth": 500,
												"pieInnerRadius": "90%",
												"pieOuterRadius": "60%"
											},
											"data": {
												"sortOrder": "label-desc",
												"content": re,
											},
											"labels": {
												"outer": {
													"format": "label-percentage1",
													"pieDistance": 20
												},
												"inner": {
													"format": "none"
												},
												"mainLabel": {
													"fontSize": 11
												},
												"percentage": {
													"color": "#999999",
													"fontSize": 11,
													"decimalPlaces": 0
												},
												"value": {
													"color": "#cccc43",
													"fontSize": 11
												},
												"lines": {
													"enabled": true,
													"color": "#777777"
												},
												"truncation": {
													"enabled": true
												}
											},
											"effects": {
												"pullOutSegmentOnClick": {
													"effect": "linear",
													"speed": 100,
													"size": 8
												}
											},
											"misc": {
												"colors": {
													"segmentStroke": "#000000"
												}
											}
										});

									}else{
										$('svg').remove();
										$('#totalsize').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="sizepecentage"]').bind('keyup', function() {
								var total = $('input[name^="sizepecentage"]').fonkTopla();
								if (total == 100) {
									$('#totalsize').attr('style','color:black').html(total);

									$('svg').remove();

							   		var datesize = document.getElementsByName("datesize");
	        						var sizepecentage = document.getElementsByName("sizepecentage");

	        						var re = new Array();

	        						for (var i = 0; i < datesize.length; i++) {
	        							var tem = {"label":"", "value":0, "color":""}
	        							tem["label"] = datesize[i].value;
	        							tem["value"] = parseFloat(sizepecentage[i].value);
	        							tem["color"] = getRandomColor();
							            re.push(tem);
							        };



							       	var pie = new d3pie("#sizepieChart", {
										"header": {
											"title": {
												"text": "Transfer Size Distribution",
												"fontSize": 15,
												"font": "courier"
											},
											"location": "pie-center",
											"titleSubtitlePadding": 10
										},
										"size": {
											"canvasWidth": 500,
											"pieInnerRadius": "90%",
											"pieOuterRadius": "60%"
										},
										"data": {
											"sortOrder": "label-desc",
											"content": re,
										},
										"labels": {
											"outer": {
												"format": "label-percentage1",
												"pieDistance": 20
											},
											"inner": {
												"format": "none"
											},
											"mainLabel": {
												"fontSize": 11
											},
											"percentage": {
												"color": "#999999",
												"fontSize": 11,
												"decimalPlaces": 0
											},
											"value": {
												"color": "#cccc43",
												"fontSize": 11
											},
											"lines": {
												"enabled": true,
												"color": "#777777"
											},
											"truncation": {
												"enabled": true
											}
										},
										"effects": {
											"pullOutSegmentOnClick": {
												"effect": "linear",
												"speed": 100,
												"size": 8
											}
										},
										"misc": {
											"colors": {
												"segmentStroke": "#000000"
											}
										}
									});

								}else{
									$('svg').remove();
									$('#totalsize').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							var $button = $('#add-url');

							$button.click(function(){
						        $('input[name^="urlpecentage"]').bind('keyup', function() {
									var total = $('input[name^="urlpecentage"]').fonkTopla();
									if (total == 100) {
										$('#totalurl').attr('style','color:black').html(total);

										$('svg').remove();

								   		var fromurl = document.getElementsByName("fromurl");
		        						var urlpecentage = document.getElementsByName("urlpecentage");

		        						var re = new Array();

		        						for (var i = 0; i < fromurl.length; i++) {
		        							var tem = {"label":"", "value":0, "color":""}
		        							tem["label"] = fromurl[i].value;
		        							tem["value"] = parseFloat(urlpecentage[i].value);
		        							tem["color"] = getRandomColor();
								            re.push(tem);
								        };



								       	var pie = new d3pie("#urlpieChart", {
											"header": {
												"title": {
													"text": "From Url Distribution",
													"fontSize": 15,
													"font": "courier"
												},
												"location": "pie-center",
												"titleSubtitlePadding": 10
											},
											"size": {
												"canvasWidth": 1000,
												"pieInnerRadius": "90%",
												"pieOuterRadius": "60%"
											},
											"data": {
												"sortOrder": "label-desc",
												"content": re,
											},
											"labels": {
												"outer": {
													"format": "label-percentage1",
													"pieDistance": 20
												},
												"inner": {
													"format": "none"
												},
												"mainLabel": {
													"fontSize": 11
												},
												"percentage": {
													"color": "#999999",
													"fontSize": 11,
													"decimalPlaces": 0
												},
												"value": {
													"color": "#cccc43",
													"fontSize": 11
												},
												"lines": {
													"enabled": true,
													"color": "#777777"
												},
												"truncation": {
													"enabled": true
												}
											},
											"effects": {
												"pullOutSegmentOnClick": {
													"effect": "linear",
													"speed": 100,
													"size": 8
												}
											},
											"misc": {
												"colors": {
													"segmentStroke": "#000000"
												}
											}
										});

									}else{
										$('svg').remove();
										$('#totalurl').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="urlpecentage"]').bind('keyup', function() {
								var total = $('input[name^="urlpecentage"]').fonkTopla();
								if (total == 100) {
									$('#totalurl').attr('style','color:black').html(total);

									$('svg').remove();

							   		var fromurl = document.getElementsByName("fromurl");
	        						var urlpecentage = document.getElementsByName("urlpecentage");

	        						var re = new Array();

	        						for (var i = 0; i < fromurl.length; i++) {
	        							var tem = {"label":"", "value":0, "color":""}
	        							tem["label"] = fromurl[i].value;
	        							tem["value"] = parseFloat(urlpecentage[i].value);
	        							tem["color"] = getRandomColor();
							            re.push(tem);
							        };



							       	var pie = new d3pie("#urlpieChart", {
										"header": {
											"title": {
												"text": "From Url Distribution",
												"fontSize": 15,
												"font": "courier"
											},
											"location": "pie-center",
											"titleSubtitlePadding": 10
										},
										"size": {
											"canvasWidth": 1000,
											"pieInnerRadius": "90%",
											"pieOuterRadius": "60%"
										},
										"data": {
											"sortOrder": "label-desc",
											"content": re,
										},
										"labels": {
											"outer": {
												"format": "label-percentage1",
												"pieDistance": 20
											},
											"inner": {
												"format": "none"
											},
											"mainLabel": {
												"fontSize": 11
											},
											"percentage": {
												"color": "#999999",
												"fontSize": 11,
												"decimalPlaces": 0
											},
											"value": {
												"color": "#cccc43",
												"fontSize": 11
											},
											"lines": {
												"enabled": true,
												"color": "#777777"
											},
											"truncation": {
												"enabled": true
											}
										},
										"effects": {
											"pullOutSegmentOnClick": {
												"effect": "linear",
												"speed": 100,
												"size": 8
											}
										},
										"misc": {
											"colors": {
												"segmentStroke": "#000000"
											}
										}
									});

								}else{
									$('svg').remove();
									$('#totalurl').attr('style','color:red').html(total+'!');
								};
							   
							});
						});


						$(document).ready(function(){
							var $button = $('#add-hurl');

							$button.click(function(){
						        $('input[name^="hurlpecentage"]').bind('keyup', function() {
									var total = $('input[name^="hurlpecentage"]').fonkTopla();
									if (total == 100) {
										$('#totalhurl').attr('style','color:black').html(total);

										$('svg').remove();

								   		var fromhurl = document.getElementsByName("fromhurl");
		        						var hurlpecentage = document.getElementsByName("hurlpecentage");

		        						var re = new Array();

		        						for (var i = 0; i < fromhurl.length; i++) {
		        							var tem = {"label":"", "value":0, "color":""}
		        							tem["label"] = fromhurl[i].value;
		        							tem["value"] = parseFloat(hurlpecentage[i].value);
		        							tem["color"] = getRandomColor();
								            re.push(tem);
								        };



								       	var pie = new d3pie("#urlpieChart", {
											"header": {
												"title": {
													"text": "From Url Distribution",
													"fontSize": 15,
													"font": "courier"
												},
												"location": "pie-center",
												"titleSubtitlePadding": 10
											},
											"size": {
												"canvasWidth": 1000,
												"pieInnerRadius": "90%",
												"pieOuterRadius": "60%"
											},
											"data": {
												"sortOrder": "label-desc",
												"content": re,
											},
											"labels": {
												"outer": {
													"format": "label-percentage1",
													"pieDistance": 20
												},
												"inner": {
													"format": "none"
												},
												"mainLabel": {
													"fontSize": 11
												},
												"percentage": {
													"color": "#999999",
													"fontSize": 11,
													"decimalPlaces": 0
												},
												"value": {
													"color": "#cccc43",
													"fontSize": 11
												},
												"lines": {
													"enabled": true,
													"color": "#777777"
												},
												"truncation": {
													"enabled": true
												}
											},
											"effects": {
												"pullOutSegmentOnClick": {
													"effect": "linear",
													"speed": 100,
													"size": 8
												}
											},
											"misc": {
												"colors": {
													"segmentStroke": "#000000"
												}
											}
										});

									}else{
										$('svg').remove();
										$('#totalhurl').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="hurlpecentage"]').bind('keyup', function() {
								var total = $('input[name^="hurlpecentage"]').fonkTopla();
								if (total == 100) {
									$('#totalhurl').attr('style','color:black').html(total);

									$('svg').remove();

							   		var fromhurl = document.getElementsByName("fromhurl");
	        						var hurlpecentage = document.getElementsByName("hurlpecentage");

	        						var re = new Array();

	        						for (var i = 0; i < fromhurl.length; i++) {
	        							var tem = {"label":"", "value":0, "color":""}
	        							tem["label"] = fromhurl[i].value;
	        							tem["value"] = parseFloat(hurlpecentage[i].value);
	        							tem["color"] = getRandomColor();
							            re.push(tem);
							        };



							       	var pie = new d3pie("#urlpieChart", {
										"header": {
											"title": {
												"text": "From Url Distribution",
												"fontSize": 15,
												"font": "courier"
											},
											"location": "pie-center",
											"titleSubtitlePadding": 10
										},
										"size": {
											"canvasWidth": 1000,
											"pieInnerRadius": "90%",
											"pieOuterRadius": "60%"
										},
										"data": {
											"sortOrder": "label-desc",
											"content": re,
										},
										"labels": {
											"outer": {
												"format": "label-percentage1",
												"pieDistance": 20
											},
											"inner": {
												"format": "none"
											},
											"mainLabel": {
												"fontSize": 11
											},
											"percentage": {
												"color": "#999999",
												"fontSize": 11,
												"decimalPlaces": 0
											},
											"value": {
												"color": "#cccc43",
												"fontSize": 11
											},
											"lines": {
												"enabled": true,
												"color": "#777777"
											},
											"truncation": {
												"enabled": true
											}
										},
										"effects": {
											"pullOutSegmentOnClick": {
												"effect": "linear",
												"speed": 100,
												"size": 8
											}
										},
										"misc": {
											"colors": {
												"segmentStroke": "#000000"
											}
										}
									});

								}else{
									$('svg').remove();
									$('#totalhurl').attr('style','color:red').html(total+'!');
								};
							   
							});
						});


						$(document).ready(function(){
							var $button = $('#add-regularcity');

							$button.click(function(){
						        $('input[name^="regularcitypercentage"]').bind('keyup', function() {
									var total = $('input[name^="regularcitypercentage"]').fonkTopla();
									if (total == 100) {
										$('#totalrc').attr('style','color:black').html(total);
									}else{
										$('#totalrc').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });

							$('input[name^="regularcitypercentage"]').bind('keyup', function() {
								var total = $('input[name^="regularcitypercentage"]').fonkTopla();
								if (total == 100) {
									$('#totalrc').attr('style','color:black').html(total);
								}else{
									$('#totalrc').attr('style','color:red').html(total+'!');
								};
							   
							});
						});

						$(document).ready(function(){
							var $button = $('#add-hackcity');

							$button.click(function(){
						        $('input[name^="hackcitypercentage"]').bind('keyup', function() {
									var total = $('input[name^="hackcitypercentage"]').fonkTopla();
									if (total == 100) {
										$('#totalhc').attr('style','color:black').html(total);
									}else{
										$('#totalhc').attr('style','color:red').html(total+'!');
									};
								   
								});
						    });
							$('input[name^="hackcitypercentage"]').bind('keyup', function() {
								var total = $('input[name^="hackcitypercentage"]').fonkTopla();
								if (total == 100) {
									$('#totalhc').attr('style','color:black').html(total);
								}else{
									$('#totalhc').attr('style','color:red').html(total+'!');
								};
							   
							});
						});
						$(document).ready(function(){
							$('#wuhawuhahackh').click(function(){
								$('#wuhawuharegular').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuhahack').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuharegularr').click(function(){
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuhahack1h').click(function(){
								$('#wuhawuharegular1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuhahack1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuharegular1r').click(function(){
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuhahack2h').click(function(){
								$('#wuhawuharegular2').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuhahack2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuharegular2r').click(function(){
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuhahack3h').click(function(){
								$('#wuhawuharegular3').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuhahack3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
							$('#wuhawuharegular3r').click(function(){
								$('#wuhawuharegular3').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack3').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular1').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack1').attr({'style':'background:#f1f1f1;color:black;'});
								$('#wuhawuharegular2').attr({'style':'background:#1A6898;color:white;'});
								$('#wuhawuhahack2').attr({'style':'background:#f1f1f1;color:black;'});
							});
						});
						$(document).ready(function(){
						    $("#add-regularpattern").hover(function(){
						    	$('#addrpinfo').fadeIn();
						    },function() {
						    	$('#addrpinfo').fadeOut();
						    });
						    $("#add-hackpattern").hover(function(){
						    	$('#addhpinfo').fadeIn();
						    },function() {
						    	$('#addhpinfo').fadeOut();
						    });
						    $("#add-regularperiod").hover(function(){
						    	$('#addrperinfo').fadeIn();
						    },function() {
						    	$('#addrperinfo').fadeOut();
						    });
						    $("#add-hackperiod").hover(function(){
						    	$('#addhperinfo').fadeIn();
						    },function() {
						    	$('#addhperinfo').fadeOut();
						    });
						    $("#add-url").hover(function(){
						    	$('#adduinfo').fadeIn();
						    },function() {
						    	$('#adduinfo').fadeOut();
						    });
						    $("#add-hurl").hover(function(){
						    	$('#addhuinfo').fadeIn();
						    },function() {
						    	$('#addhuinfo').fadeOut();
						    });
						});
