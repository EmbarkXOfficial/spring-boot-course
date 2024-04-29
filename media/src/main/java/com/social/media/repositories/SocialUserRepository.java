package com.social.media.repositories;

import com.social.media.models.SocialUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SocialUserRepository extends JpaRepository<SocialUser,Long> {
}
