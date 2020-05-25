package ru.aneuro.adiweather.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.aneuro.adiweather.entity.AdidasStore;
import ru.aneuro.adiweather.repository.AdidasStoreRepo;

import java.util.List;
import java.util.Optional;

@Service
public class AdidasStoreService {
    private final AdidasStoreRepo repository;

    @Autowired
    public AdidasStoreService(AdidasStoreRepo repository) {
        this.repository = repository;
    }

    public void save(AdidasStore store) {
        this.repository.save(store);
    }

    public List<AdidasStore> getAll() {
        return this.repository.findAll();
    }

    public Optional<AdidasStore> get(String id) {
        return this.repository.findById(id);
    }

}
