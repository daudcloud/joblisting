$(document).ready(function() {
    let filters = {
        'role' : '',
        'level' : '',
        'languages' : [],
        'tools' : []
    };

    $.getJSON("data.json", function(res){

        
        const reload = function(filter) {
            $('.jobs').empty();
            const load = function(i) {
                let infoHead = '<p>' + res[i].company + '</p>';
                let remainCategory = '';
                let featured = '';
                
                for(let j = 0; j < res[i].languages.length; j++) {
                    remainCategory += 
                    '<div class="category languages">' +
                    res[i].languages[j] +
                    '</div>'
                }
    
                for(let j = 0; j < res[i].tools.length; j++) {
                    remainCategory +=
                    '<div class="category tools">' +
                    res[i].tools[j] +
                    '</div>'
                }
    
                if(res[i].new) {
                    infoHead += '<span class="bubble new">NEW!</span>'
                }
                if(res[i].featured) {
                    infoHead += '<span class="bubble feat">FEATURED</span>';
                    featured = 'featured';
                }
    
                $('.jobs').append(
                    '<div class="job ' + featured + '">' +
                    '<div class="job-img">' + 
                        '<img src="' +
                        res[i].logo +
                        '" alt="' + res[i].company + '"></img>' +
                    '</div>' +
                        '<div class="job-info">' +
                            '<div class="info-head">' +
                                infoHead +
                            '</div>' +
                            '<div class="info-body">' +
                                '<h3>' + res[i].position + '</h3>' +
                            '</div>' +
                            '<div class="info-foot">' +
                                '<span>' + res[i].postedAt + '</span>' +
                                '<div class="dot"></div>' +
                                '<span>' + res[i].contract + '</span>' +
                                '<div class="dot"></div>' +
                                '<span>' + res[i].location + '</span>' +
                            '</div>' +
                        '</div>' +
                        '<div class="hr"></div>' +
                        '<div class="job-category">' +
                            '<div class="category role">' + res[i].role + '</div>' +
                            '<div class="category level">' + res[i].level + '</div>' +
                            remainCategory +
                        '</div>' +
                    '</div>'
                )
            }
            for(let i = 0; i < res.length; i++) {
                if(filter['role'] == '' &&
                filter['level'] == '' &&
                filter['languages'].length == 0 &&
                filter['tools'].length == 0) {
                    load(i);
                } else {

                    //////// ROLES ////////
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == '' && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length == 0) {
                        load(i);
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length == 0) {
                        load(i);
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == '' && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length == 0) {
                        let allfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == '' && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length != 0) {
                        let allfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length == 0) {
                        let allfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length != 0) {
                        let allfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length != 0) {
                        let toolsfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        let langfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        if(toolsfounded && langfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == res[i]['role'] && 
                    filter['level'] == '' && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length != 0) {
                        let toolsfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        let langfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        if(toolsfounded && langfounded) {
                            load(i);
                        }
                    }
                    //////// LEVEL ////////
                    if(filter['role'] == '' && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length == 0) {
                        load(i);
                    }
                    if(filter['role'] == '' && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length == 0) {
                        let allfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == '' && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length != 0) {
                        let allfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == '' && 
                    filter['level'] == res[i]['level'] && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length != 0) {
                        let langfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        let toolsfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        if(langfounded && toolsfounded) {
                            load(i);
                        }
                    }
                    //////// LANGUAGES ////////
                    if(filter['role'] == '' && 
                    filter['level'] == '' && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length == 0) {
                        let allfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == '' && 
                    filter['level'] == '' && 
                    filter['languages'].length != 0 && 
                    filter['tools'].length != 0) {
                        let langfounded = filter['languages'].every(ai => res[i]['languages'].includes(ai));
                        let toolsfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        if(langfounded && toolsfounded) {
                            load(i);
                        }
                    }
                    if(filter['role'] == '' && 
                    filter['level'] == '' && 
                    filter['languages'].length == 0 && 
                    filter['tools'].length != 0) {
                        let allfounded = filter['tools'].every(ai => res[i]['tools'].includes(ai));
                        if(allfounded) {
                            load(i);
                        }
                    }
                }
            }
            $('.clear').click(function() {
                $('.filters .job-category').empty();
                filters['role'] = '';
                filters['level'] = '';
                filters['languages'] = [];
                filters['tools'] = [];
                if($('.filter').length == 0) $('.filters').css('display','none');
                console.log(filters);
                reload(filters);
            })
            
            $('.role').click(function() {
                filters['role'] = $(this).text();
                $('.roles').remove();
                $('.filters').css('display', 'flex');
                $('.filters .job-category').append(
                    '<div class="filter roles">' +
                        '<div class="category">' +
                        $(this).text() +
                        '</div>' +
                        '<div class="close"><img src="./images/icon-remove.svg" alt=""></div>' +
                    '</div>'
                )
                $('.roles .close').click(function() {
                    $(this).parent().remove();
                    filters['role'] = '';
                    if($('.filter').length == 0) $('.filters').css('display','none');
                    console.log(filters);
                    reload(filters);
                })
                console.log(filters);
                reload(filters);
            })
    
            $('.level').click(function() {
                filters['level'] = $(this).text();
                $('.levels').remove();
                $('.filters').css('display', 'flex');
                $('.filters .job-category').append(
                    '<div class="filter levels">' +
                        '<div class="category">' +
                        $(this).text() +
                        '</div>' +
                        '<div class="close"><img src="./images/icon-remove.svg" alt=""></div>' +
                    '</div>'
                )
                $('.levels .close').click(function() {
                    $(this).parent().remove();
                    filters['level'] = '';
                    if($('.filter').length == 0) $('.filters').css('display','none');
                    console.log(filters);
                    reload(filters);
                })
                console.log(filters);
                reload(filters);
            })
    
            $('.languages').click(function(){
                for(let i = 0; i < filters['languages'].length; i++) {
                    if(filters['languages'][i] == $(this).text()) {
                        let index = filters['languages'].indexOf($(this).text());
                        let lang = $('.languagess.' + $(this).text().toLowerCase());
                        filters['languages'].splice(index,1);
                        lang.remove();
                        break;
                    }
                }
                filters['languages'].push($(this).text());
                $('.filters').css('display', 'flex');
                $('.filters .job-category').append(
                    '<div class="filter languagess ' + $(this).text().toLowerCase() + '">' +
                        '<div class="category">' +
                        $(this).text() +
                        '</div>' +
                        '<div class="close"><img src="./images/icon-remove.svg" alt=""></div>' +
                    '</div>'
                )
                // $('.languagess .close').click(function() {
                //     let index = filters['languages'].indexOf($(this).prev().text());
                //     filters['languages'].splice(index,1);
                //     $(this).parent().remove();
                //     if($('.filter').length == 0) $('.filters').css('display','none');
                //     console.log(filters);
                //     reload(filters);
                // })
                console.log(filters);
                reload(filters);
            })
    
            $('.tools').click(function() {
                for(let i = 0; i < filters['tools'].length; i++) {
                    if(filters['tools'][i] == $(this).text()) {
                        let index = filters['tools'].indexOf($(this).text());
                        let lang = $('.toolss.' + $(this).text().toLowerCase());
                        filters['tools'].splice(index,1);
                        lang.remove();
                        break;
                    }
                }
                filters['tools'].push($(this).text());
                $('.filters').css('display', 'flex');
                $('.filters .job-category').append(
                    '<div class="filter toolss '+ $(this).text().toLowerCase() +'">' +
                        '<div class="category">' +
                        $(this).text() +
                        '</div>' +
                        '<div class="close"><img src="./images/icon-remove.svg" alt=""></div>' +
                    '</div>'
                )
                // $('.toolss .close').click(function() {
                //     let index = filters['tools'].indexOf($('.toolss .category').text());
                //     filters['tools'].splice(index,1);
                //     $(this).parent().remove();
                //     if($('.filter').length == 0) $('.filters').css('display','none');
                //     console.log(filters);
                //     reload(filters);
                // })
                console.log(filters);
                reload(filters);
            })
        }
        reload(filters);
    })
})