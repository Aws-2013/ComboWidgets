$(document).ready(function() {
    //jQ Menu
	$("#my_menu").menu();

    //jQ Tabs
    $('#tabsContainer').tabs(); 
    
    //jQ Dropdown
    $('#dd4').dropdown({multiple: true, sep: ' :: ', ddContentsWidth: '300px'});
    $('#dd5').dropdown({multiple: true, sep: ' :) ', ddContentsWidth: '500px'});
    $('#dd6').dropdown({ddContentsWidth: '200px'});
    $('#dd7').dropdown({ddContentsWidth: '200px', labelDropDown: true});
    $('#dd8').dropdown({ddContentsWidth: '400px', ddContentsHeight: '302px', labelDropDown: true});
    $('#dd9').dropdown({ddContentsWidth: '775px', ddContentsHeight: '350px', labelDropDown: true});
    $('#dd10').dropdown({ddContentsWidth: '775px', ddContentsHeight: '350px', labelDropDown: true});
    $('#dd11').dropdown({ddContentsWidth: '400px', ddContentsHeight: '302px', labelDropDown: true});
    
    //jQ Accordion
    $("#accordion1").accordion({speed : 300, height : '140px', animate : true,	selected : 1, evt : 'mouseover'});
    $("#accordion2").accordion({speed : 300, height : '140px', animate : true, selected : 2,evt : 'mouseover'});

});