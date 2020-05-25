package ru.aneuro.adiweather.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.aneuro.adiweather.entity.AdidasStore;
import ru.aneuro.adiweather.service.AdidasStoreService;

import java.util.Optional;

@RestController
public class StoreRestContoller {
    @Autowired
    private AdidasStoreService adidasStoreService;

    @RequestMapping(value = "/like/{storeId}", method = RequestMethod.GET)
    public AdidasStore likeStore(@PathVariable String storeId) {
        Optional<AdidasStore> optional = adidasStoreService.get(storeId);
        AdidasStore adidasStore = optional.orElseGet(AdidasStore::new);
        if (adidasStore.getId() == null)
            adidasStore.setId(storeId);
        adidasStore.incLike();
        adidasStoreService.save(adidasStore);
        return adidasStore;
    }

    @RequestMapping(value = "/{storeId}", method = RequestMethod.GET)
    public AdidasStore getStore(@PathVariable String storeId) {
        Optional<AdidasStore> optional = adidasStoreService.get(storeId);

        return optional.orElseGet(AdidasStore::new);
    }
}
