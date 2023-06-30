package net.youssfi.customerservice.web;

import lombok.AllArgsConstructor;
import net.youssfi.customerservice.model.Customer;
import net.youssfi.customerservice.repo.CustomerRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
public class CustomerController {
    private CustomerRepository customerRepository;
    @GetMapping("/customers")
    //@PreAuthorize("hasRole('USER')")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<Customer> customerList() {
        return customerRepository.findAll();
    }
    @DeleteMapping("/customers/{id}")
    //@PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public void deleteCustomer(@PathVariable String id){
        customerRepository.deleteById(id);
    }
    @PostMapping("/customers")
    //@PreAuthorize("hasRole('ADMIN')")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public Customer saveCustomer(@RequestBody Customer customer){
        customer.setId(UUID.randomUUID().toString());
        return customerRepository.save(customer);
    }
    @GetMapping("/profile")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }
}
