package edu.put.server.security;

import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Setter
@EnableWebMvc
@Configuration
@ConfigurationProperties(prefix = "web-config")
public class WebConfig implements WebMvcConfigurer {

    private String frontAppUrl;

    private String[] allowedMethodArray;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(frontAppUrl)
                .allowedMethods(allowedMethodArray)
                .allowCredentials(true);
    }

}
