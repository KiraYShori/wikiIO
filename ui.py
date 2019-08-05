def intanceFeaturesOffline(self,nameClassToInstance):
    dictFeatures = {}


           for SubClass in FeatureFactory._subclasses_():
               for subClassName in nameClassToInstance:
                   if (SubClass == subClassName):
                       objFeatFact = None
                       if(SubClass.IS_LANGUAGE_DEPENDENT):
                           objFeatFact = SubClass(objEnglish)
                       else:
                           objFeatFact = SubClass()

      for feat in objFeatFact.createFeatures():
          dictFeatures[feat.name] = feat

    return dictFeatures
