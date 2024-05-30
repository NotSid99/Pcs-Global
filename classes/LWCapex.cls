public with Sharing class LWCapex {
        @AuraEnabled
      public static String addnewreservation (String resName, String resEmail, String resPhone, Date resDate,  Integer resParty)
      {
         system.debug('Name'+resName );
          system.debug('Email'+resEmail );
          system.debug('Phone'+resPhone );
          system.debug('Date'+resDate );
          
          system.debug('Party'+resParty );
         
              Reservation__c res = new Reservation__c();
              res.Name__c = resName;
              res.Email__c = resEmail;
              res.Phone__c = resPhone;
              res.Date__c = resDate;
              
              res.Party_Size__c = resParty;
           try{
                insert res;
               return 'sucess';
          }
          catch(exception e) {
              system.debug(e);
              return 'error'+ e.getMessage();
          }
            
      }}