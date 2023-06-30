package net.youssfi.customerservice;

import net.youssfi.customerservice.model.Customer;
import net.youssfi.customerservice.repo.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.UUID;

@SpringBootApplication
public class CustomerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(CustomerRepository customerRepository){
        return args -> {
            for (int i = 1; i <= 10; i++) {
                customerRepository.save(Customer.builder()
                                .id(UUID.randomUUID().toString())
                                .name("Customer"+i).email("cust"+i+"@gmail.com")
                        .build());
            }
        };
    }
}
