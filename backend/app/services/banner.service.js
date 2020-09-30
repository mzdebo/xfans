angular.module('xMember')
  .factory('bannerService', function ($http) {
    return {
      findAll: function(limit,offset,query){  
        var filter ='';
        if(typeof query!= 'undefined'){
          filter = '&sort='+query.sort+'&order='+query.order+'&keyword='+query.keyword;
        }
        return $http.get('/api/v1/banners?limit='+limit+'&offset='+offset+filter);
      },
      find: function(id){        
        return $http.get('/api/v1/banners/'+id);
      },
      delete: function(id){        
        return $http.delete('/api/v1/banners/'+id);
      }
    };
  });