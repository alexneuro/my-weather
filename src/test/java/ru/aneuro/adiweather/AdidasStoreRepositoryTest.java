package ru.aneuro.adiweather;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import ru.aneuro.adiweather.entity.AdidasStore;
import ru.aneuro.adiweather.repository.AdidasStoreRepo;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest
class AdidasStoreRepositoryTest {

    @Autowired
    private DataSource dataSource;
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Autowired
    private EntityManager entityManager;
    @Autowired
    private AdidasStoreRepo adidasStoreRepository;

    @Test
    public void testNewInstance() {
        AdidasStore dto = new AdidasStore();
        dto.setId("ID");
        dto.setLikeCount(10);
        assertEquals("ID", dto.getId());
        assertEquals(10, dto.getLikeCount());
    }

    @Test
    void injectedComponentsAreNotNull() {
        assertNotNull(dataSource);
        assertNotNull(jdbcTemplate);
        assertNotNull(entityManager);
        assertNotNull(adidasStoreRepository);
    }

    @Test
    void whenSaved_thenFindsById() {
        AdidasStore adidasStore = new AdidasStore();
        adidasStore.setId("ID_TEST");
        adidasStore.setLikeCount(100);

        adidasStoreRepository.save(adidasStore);
        assertNotNull(adidasStoreRepository.findById("ID_TEST").orElse(null));
        assertEquals(100, adidasStoreRepository.findById("ID_TEST").orElseGet(AdidasStore::new).getLikeCount());
    }
}