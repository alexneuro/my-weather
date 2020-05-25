package ru.aneuro.adiweather.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.aneuro.adiweather.entity.AdidasStore;

public interface AdidasStoreRepo extends JpaRepository<AdidasStore, String> {

}
