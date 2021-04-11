$(document).ready(function() {

    for(let i = 0 ; i < 10 ; i++) {
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
                '<div class="job-category">' +
                    '<div class="category role">' + res[i].role + '</div>' +
                    '<div class="category level">' + res[i].level + '</div>' +
                    remainCategory +
                '</div>' +
            '</div>'
        )
    }
    
})