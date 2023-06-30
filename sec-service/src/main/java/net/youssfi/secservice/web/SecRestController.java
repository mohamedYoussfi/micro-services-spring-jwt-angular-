package net.youssfi.secservice.web;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SecRestController {
    @GetMapping("/myData")
    public Map<String, Object> myData(){
        return Map.of("name","Mohamed","salary",45000);
    }
    @GetMapping("/profile")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }

}
