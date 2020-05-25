package ru.aneuro.adiweather.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.aneuro.adiweather.entity.AdidasStore;
import ru.aneuro.adiweather.service.AdidasStoreService;

import java.util.List;

@Controller
public class MainController {
    @Autowired
    private AdidasStoreService adidasStoreService;

    @RequestMapping("/")
    public String greeting(Model model) {
        List<AdidasStore> list = adidasStoreService.getAll();
        model.addAttribute("stores", list);
        return "stores";
    }


}
