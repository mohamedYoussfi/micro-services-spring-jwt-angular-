package net.youssfi.secservice.web;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Controller
public class SecController {

    public String login(){
        return "login";
    }
}
